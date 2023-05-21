import '../styles/Card.css';

export type IssueCardData = {
    id: string,
    datePublished: string
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