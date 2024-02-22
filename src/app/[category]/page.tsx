import CategoryPage from './categoryPage';

export default function Page({ params }: { params: { category: string } }) {
    return (
        <div className='mb-[120px] '>
            <CategoryPage params={params} />
        </div>
    )
}
