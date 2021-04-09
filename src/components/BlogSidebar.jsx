import React from 'react';
import TagCloud from './TagCloud';
import SidebarBlogPost from './SidebarBlogPost';
import "../styles/sidebar.scss"

export default function BlogSidebar({ articles }) {
 
    const tags = [{name: "All", link: "/blog", color: "#F7F6E7"},
                {name: "Roadmap", link: "/blog/roadmap", color: "#97C7CB"},
                {name: "Community", link: "/blog/community", color: "#B48F7F"},
                {name: "Tutorial", link: "/blog/tutorial", color: "#B48F7F"},
                {name: "Governance", link: "/blog/governance", color: "#DDC269"},
                {name: "Defi", link: "/blog/defi", color: "#50414F"},
                {name: "News", link: "/blog/news", color: "#99BCB1"},
                {name: "Vision", link: "/blog/vision", color: "#AA9B9D"},
                {name: "Press Release", link: "/blog/pressrelease", color: "#E0C78E"}]

    return (
        <>
            <TagCloud tags={ tags } />
            <h3>Featured</h3>

            {
                    articles.map((node, index) => {

                    const imgURL = node.frontmatter.image ? node.frontmatter.image.publicURL : "https://via.placeholder.com/427x240";

                    console.log("ImageURL: ", imgURL)
                    console.log("Date: ", node.frontmatter.date)
                    console.log("Categories: ", node.frontmatter.categories)

                        return (
                            <SidebarBlogPost key={ index }
                             title={ node.frontmatter.title }
                             image={ imgURL }
                             date={node.frontmatter.date }
                                />
                        )
                    })
                }
        </>
    );
}
