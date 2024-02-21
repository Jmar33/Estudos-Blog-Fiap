import { Layout } from "../components/Layout"
import { client } from "../lib/createClient";
import { Link } from "react-router-dom";
import Pagination from "../components/Pagination"
import { useEffect, useState } from "react"

export const AllPosts = () => {
    const [state, setState] = useState({ currentPosts: [], currentPage: null, totalPages: null })
    const pageLimit = 2

    useEffect(() => {
        // Definindo uma função que será chamada apenas quando o componente for montado
        const fetchData = async () => {
            const entries = await client.getEntries({
                content_type: 'blogPost',
                skip: 0, // Iniciar da primeira página
                limit: pageLimit,
                order: "-sys.createdAt"
            });
            console.log('posts', entries.items);
            const currentPage = entries.skip
            const currentPosts = entries.items
            const totalPages = Math.ceil(entries.total / entries.limit);
            setState({ currentPage, currentPosts, totalPages});
        };

        // Chamando a função fetchData apenas uma vez, quando o componente for montado
        fetchData();
    }, []); // array vazio indica o onload do comp
    
    const onPageChanged = data => {
        const { currentPage, totalPages, pageLimit } = data;

        client
        .getEntries({
            content_type: 'blogPost',
            skip: (currentPage - 1) * pageLimit, // Ajustar o valor de skip de acordo com a página atual
            limit: pageLimit,
            order: "-sys.createdAt"
        })
        .then(function (entries) {
            console.log('posts', entries.items);
            setState({ currentPage, currentPosts: entries.items, totalPages});
        });
        
    }

    const { currentPosts, totalPages } = state;
    const totalPosts = totalPages * pageLimit;

    if (totalPosts === 0) return null;


    return (
        <Layout>
            <div className="container">
                <div className="row">
                    <main className="col-md-8">
                        <h1 className="my-3">Todos os posts</h1>

                        {currentPosts.map(post => (
                            <div className="card mb-3" key={post.sys.id}>
                                <div className="card-body">
                                    <h5 className="card-title">{post.fields.postTitle}</h5>
                                    <p className="card-text">{post.fields.postDescription}</p>
                                    <Link to={`/post/${post.fields.postSlug}`} className="card-link">
                                        Ver post
                                    </Link>
                                </div>
                            </div>
                        ))}
                        <Pagination totalRecords={totalPosts} pageLimit={pageLimit} pageNeighbours={1} onPageChanged={onPageChanged} />
 
                    </main>
                    <aside className="col-md-4">
                        <div className="mt-3">
                            <Link to="/" className="btn btn-primary">
                                Voltar para Home
                            </Link>
                        </div>
                    </aside>
                </div>
            </div>
        </Layout>
    )
}
