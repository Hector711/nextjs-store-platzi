interface CategoryProps {
  params: {
    categories: string[],

    searchParams?: string
  }

}

export default function Category(props: CategoryProps) {
  console.log(props)
  
  const { categories } = props.params
  console.log(categories)
  
  return (
    <main >
      <h1>Categoria dinamica: { categories }</h1>

    </main>
  );
}
