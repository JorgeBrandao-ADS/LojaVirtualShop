
export const Categorias = async () => {
    const res = await fetch("https://fakestoreapi.com/products/categories")
    if (res.ok){
        const data = await res.json()
        return data;
    } else {
        console.log("Erro")
    }
} 


export const Produtos = async () => {
    const res = await fetch("https://fakestoreapi.com/products")
    if (res.ok){
        const data = await res.json()
        return data;
    } else {
        console.log("Erro")
    }
}


export const ProdutoCategoria = async () => {
    const res = await fetch("https://fakestoreapi.com/products/category/{category}")
    if (res.ok){
        const data = await res.json()
        return data;
    } else {
        console.log("Erro")
    }
}