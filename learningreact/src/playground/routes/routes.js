//@ts-ignore
const pages=require.context('../components', true, /\.js$/)
console.log("pages",pages)



const routes=[]
const routeNames=[]
const routeTitles=[]

pages.keys().forEach((path) => {
    const fileName=/(\/[ \w]+?)\1(?=\.)/.exec(path)?.[0]
    if(!fileName) return null;
    const normalizedPathname=fileName.includes('$')?
    fileName.replace('$',":"):fileName.replace(/\/index/,"").split('/')[2]

    routes.push({
        path:`${normalizedPathname.toLowerCase()}`,
        Element:pages(path).default
    })
    
    routeNames.push(`${normalizedPathname.toLowerCase()}`)
    routeTitles.push(normalizedPathname)
});

console.log("routes",routes)
export {routeNames, routeTitles,routes}