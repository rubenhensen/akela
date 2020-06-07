<script context="module">
    export async function preload({params, query}) {

        const res1 = await this.fetch(API_URL + '/api/members', {
            method: 'GET', // *GET, POST, PUT, DELETE, etc.
            mode: 'cors', // no-cors, *cors, same-origin
            cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            credentials: 'include', // include, *same-origin, omit
            // headers: {
            //     'Content-Type': 'application/json'
            // 'Content-Type': 'application/x-www-form-urlencoded',
            // },
            redirect: 'follow', // manual, *follow, error
            referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
            // body: JSON.stringify(data) // body data type must match "Content-Type" header
        });
        const members = await res1.json();

        const res2 = await this.fetch(API_URL + '/api/presence', {
            method: 'GET', // *GET, POST, PUT, DELETE, etc.
            mode: 'cors', // no-cors, *cors, same-origin
            cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            credentials: 'include', // include, *same-origin, omit
            // headers: {
            //     'Content-Type': 'application/json'
            // 'Content-Type': 'application/x-www-form-urlencoded',
            // },
            redirect: 'follow', // manual, *follow, error
            referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
            // body: JSON.stringify(data) // body data type must match "Content-Type" header
        });
        const presence = await res2.json();
        // console.log(members);
        // console.log(presence)
        return {members, presence}
    }
</script>

<style>
</style>

<svelte:head>
    <title>Akela</title>
</svelte:head>

<List class="demo-list" twoLine avatarList singleSelection bind:selectedIndex={selectionIndex}>
    <Subheader>Verwacht</Subheader>
    {#each aangemeld.sort(sortByName) as item}
        <Item on:SMUI:action={() => selectionTwoLine = item.name}
              disabled={item.disabled} selected={selectionTwoLine === item.name}>
            <Graphic
                    style="background-image: url(https://via.placeholder.com/40x40.png?text={item.name.split(' ').map(val => val.substring(0, 1)).join('')});"/>
            <Text>
                <PrimaryText>{item.name}</PrimaryText>
                <SecondaryText>{item.description}</SecondaryText>
            </Text>
            <Meta>
                <Checkbox bind:group={selectedCheckbox} value="{item.name}"/>
            </Meta>
        </Item>
    {/each}
    <Separator/>
</List>
<!--<Separator />-->
<List class="demo-list" twoLine avatarList singleSelection bind:selectedIndex={selectionIndex}>
    <Subheader>Afgemeld</Subheader>
    {#each afgemeld.sort(sortByName) as item}
        <Item on:SMUI:action={() => selectionTwoLine = item.name}
              disabled={item.disabled} selected={selectionTwoLine === item.name}>
            <Graphic
                    style="background-image: url(https://via.placeholder.com/40x40.png?text={item.name.split(' ').map(val => val.substring(0, 1)).join('')});"/>
            <Text>
                <PrimaryText>{item.name}</PrimaryText>
                <SecondaryText>{item.description}</SecondaryText>
            </Text>
            <!--			<Meta class="material-icons">info</Meta>-->
        </Item>
    {/each}
</List>


<script>
    export let members;
    export let presence = [];
    import Button, {Icon} from '@smui/button';
    import {appBarTitle} from '../stores';
    import {onMount} from 'svelte';
    import List, {
        Group,
        Item,
        Graphic,
        Meta,
        Label,
        Separator,
        Subheader,
        Text,
        PrimaryText,
        SecondaryText
    } from '@smui/list';
    import Radio from '@smui/radio';
    import Checkbox from '@smui/checkbox';

    onMount(() => {
    	let presenceMembers2 = presence.map(val => val.member);
    	let presenceMembers = test.map(val => val);
    	console.log(presenceMembers2);
    });
    let clickedSimple = 'nothing yet';
    let clickedDense = 'nothing yet';
    let aangemeld = [
        {
            name: 'Bruce Willis',
            description: 'Scout',
            disabled: false
        },
        {
            name: 'Austin Powers',
            description: 'Scout',
            disabled: false
        },
        {
            name: 'Thomas Edison',
            description: 'Scout',
            disabled: false
        },
        {
            name: 'Stephen Hawking',
            description: 'Leiding',
            disabled: false
        }
    ];
    let afgemeld = [
        {
            name: 'Tom Holland',
            description: 'Scout',
            disabled: true
        },
        {
            name: 'John Cena',
            description: 'Scout',
            disabled: true
        },
        {
            name: 'Tim Hoffman',
            description: 'Scout',
            disabled: true
        },
        {
            name: 'Clark Kent',
            description: 'Scout',
            disabled: true
        }
    ];
    let selectionTwoLine = '';
    // This value is updated when the component is initialized, based on the
    // selected Item's `selected` prop.
    let selectionIndex = null;
    let clickedGroup = 'nothing yet';
    let selectedRadio = 'Tom Hanks';
    let selectedCheckbox = ['Tom Hanks'];
    // onMount(() => appBarTitle.update(t => pageTitle));
    // let pageTitle = 'Checklist';
    let clicked = 0;

    function sortByName(a, b) {
        let nameA = a.name.toUpperCase(); // ignore upper and lowercase
        let nameB = b.name.toUpperCase(); // ignore upper and lowercase
        if (nameA < nameB) {
            return -1;
        }
        if (nameA > nameB) {
            return 1;
        }

        // names must be equal
        return 0;
    }

    // console.log(members);
    // console.log(presence);
    // console.log(typeof presence);
    let test = [
        {
            archived: false,
            cancelled: false,
            createdAt: "2020-05-26T11:36:26.533Z",
            member: {
                role: "Scout",
                _id: "5ec52a5cd32e59002868ffaf",
                name: "Test5",
                createdAt: "2020-05-20T13:02:20.278Z",
                updatedAt: "2020-05-20T13:02:20.278Z",
            },
            present: false,
        },
        {
            archived: false,
            cancelled: true,
            createdAt: "2020-05-26T11:37:55.260Z",
            member: {
                role: "Welp J.",
                _id: "5ec52b250a280f00431a5fea",
                name: "Test3",
                createdAt: "2020-05-20T13:05:41.093Z",
                updatedAt: "2020-05-20T13:05:41.093Z",
            },
            present: false,
        }];
    // console.log(presence);
    // if (presence !== undefined) {
    // }
</script>
