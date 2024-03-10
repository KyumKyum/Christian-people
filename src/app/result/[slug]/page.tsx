export default function Result({ params }: { params: { slug: string } }) {

    const slug = params.slug
    return (
        <div>
            <p>{`This will be the result page, Slug: ${slug}`}</p>
        </div>
    );
}
