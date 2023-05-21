import '../styles/Card.css';

export type IssueCardData = {
    id: string,
    datePublished: string
}

export type ArticleCardData = {
    name: string,
    slug: string
}

export const IssueCard = (props: IssueCardData) => {
    const imgURL = `https://assets.api.bookcreator.com/${props.id.replace('/', '/books/')}/cover/`;
    const linkURL = `./issue?id=${props.id}`;

    return (
        <a href={linkURL} class="Card">
            <img src={imgURL} alt="Cover Image" />
            <span>{props.datePublished}</span>
        </a>
    );
}

export const ArticleCard = (props: ArticleCardData) => (
    <a href={`./articles?a=${props.slug}`} class="Card">
        <img src={`/articles/thumbnails/${props.slug}.png`} alt="Cover Image" />
        <span>{props.name}</span>
    </a>
);