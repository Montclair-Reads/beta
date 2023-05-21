import { For } from 'solid-js';

import Card from './Card';

import type { CardData } from './Card';

import '../styles/Cards.css';

export default (props: { issues: CardData[] }) => (
    <div class="Cards">
        <For each={props.issues}>{issue => (
            <Card id={issue.id} datePublished={issue.datePublished} />
        )}</For>
    </div>
);