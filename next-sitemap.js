const siteUrl = process.env.SITE_URL;

module.exports = {
    siteUrl,
    generateRobotsTxt: true,
    exclude: ["/contacts", "/server-sitemap.xml"],
    robotsTxtOptions:{
        policies: [
            // {userAgent: "*", disallow:"/contacts"},
            {userAgent: "*", allow:"/"},
            {userAgent: "*", allow:"/services"},
            {userAgent: "*", allow:"/services/massage"},
            {userAgent: "*", allow:"/services/dental"},
            {userAgent: "*", allow:"/services/vision"},
            // {userAgent: "*", allow:"/privacyPolicy"},
            // {userAgent: "*", allow:"/termsOfUse"},
        ],
        additionalSitemaps: [`${siteUrl}/server-sitemap.xml`]
    },
    transform: async (config, path) => {
        if (path==="/" || path===""){
            return {
                loc: path,
                changefreq: "daily",
                priority: 0.9,
                lastmod: new Date().toISOString()
            }
        }
        return {
            loc: path,
            changefreq: config.changefreq,
            priority: config.priority,
            lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
            alternateRefs: config.alternateRefs ?? [],
        }
    },
}