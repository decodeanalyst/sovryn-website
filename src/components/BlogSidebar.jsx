import React from 'react';
import TagCloud from './TagCloud';
import SidebarBlogPost from './SidebarBlogPost';
import "../styles/sidebar.scss"

export default function BlogSidebar({ articles }) {
 
    const tags = [{name: "All", link: "/blog/all"},
                {name: "Roadmap", link: "/blog/roadmap"},
                {name: "Community", link: "/blog/community"},
                {name: "Tutorial", link: "/blog/tutorial"},
                {name: "Governance", link: "/blog/governance"}]

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
