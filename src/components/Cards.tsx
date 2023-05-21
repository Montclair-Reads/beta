import { For } from 'solid-js';

import { IssueCard } from './Card';

import type { IssueCardData } from './Card';

import '../styles/Cards.css';

export const IssueCards = (props: { issues: IssueCardData[] }) => (
    <div class="Cards">
        <For each={props.issues}>{issue => (
            <IssueCard id={issue.id} datePublished={issue.datePublished} />
        )}</For>
    </div>
);