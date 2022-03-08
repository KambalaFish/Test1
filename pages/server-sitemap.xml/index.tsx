import {GetServerSideProps} from "next";
import {getServerSideSitemap, ISitemapField} from "next-sitemap";
import {getCategories} from "../../lib/api";

export const getServerSideProps: GetServerSideProps = async (ctx) => {
    const data = await getCategories();
    const fields: ISitemapField[] = data.map(i => (
            {
                loc: `${process.env.SITE_URL}/services/${i.slug}`,
                lastmod: new Date().toISOString(),
                priority: 0.5,
                changefreq: "daily"
            }
        )
    );
    return getServerSideSitemap(ctx, fields);
}

export default function Sitemap(){}
