<style>

</style>

<svelte:head>
    <title>Akela</title>
</svelte:head>

<List class="demo-list" twoLine avatarList singleSelection bind:selectedIndex={selectionIndex}>
    <Subheader>Verwacht</Subheader>
    {#each members.sort(sortByName).filter(t => !t.present && !t.cancelled) as member (member.id_)}
        <Item on:SMUI:action={() => member.present = !member.present}
              selected={selectionTwoLine === member.name}>
            <Graphic
                    style="background-image: url(https://via.placeholder.com/40x40.png?text={member.name.split(' ').map(val => val.substring(0, 1)).join('')});"/>
            <Text>
                <PrimaryText>{member.name}</PrimaryText>
                <SecondaryText>{member.role}</SecondaryText>
            </Text>
            <Meta>
                <Checkbox bind:group={selectedCheckbox} value="{member.name}"/>
            </Meta>
        </Item>
        <Separator/>
    {/each}
</List>

<List class="demo-list" twoLine avatarList singleSelection bind:selectedIndex={selectionIndex}>
    <Subheader>Aanwezig</Subheader>
    {#each members.sort(sortByName).filter(t => t.present && !t.cancelled) as member (member.id_)}
        <Item on:SMUI:action={() => member.present = !member.present} selected={selectionTwoLine === member.name}>
            <Graphic
                    style="background-image: url(https://via.placeholder.com/40x40.png?text={member.name.split(' ').map(val => val.substring(0, 1)).join('')});"/>
            <Text>
                <PrimaryText>{member.name}</PrimaryText>
                <SecondaryText>{member.role}</SecondaryText>
            </Text>
            <Meta>
                <Checkbox  group={member.name} value="{member.name}"/>
            </Meta>
        </Item>
        <Separator/>
    {/each}
</List>

<List class="demo-list" twoLine avatarList singleSelection bind:selectedIndex={selectionIndex}>
    <Subheader>Afgemeld</Subheader>
    {#each members.sort(sortByName).filter(t => t.cancelled) as member (member.id_)}
        <Item on:SMUI:action={() => selectionTwoLine = member.name}
              disabled={member.cancelled}>
            <Graphic
                    style="background-image: url(https://via.placeholder.com/40x40.png?text={member.name.split(' ').map(val => val.substring(0, 1)).join('')});"/>
            <Text>
                <PrimaryText>{member.name}</PrimaryText>
                <SecondaryText>{member.role}</SecondaryText>
            </Text>
            <!--			<Meta class="material-icons">info</Meta>-->
        </Item>
    {/each}
</List>


<script>
    import Button, {Icon} from '@smui/button';
    import {appBarTitle} from '../stores';
    import {onMount} from 'svelte';
    import LoremIpsum from "../components/LoremIpsum.svelte";
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

    let clickedSimple = 'nothing yet';
    let clickedDense = 'nothing yet';
    let members = [
        {
            id_: 1,
            name: 'Clark Kent 1',
            role: 'Scout',
            archived: false,
            cancelled: false,
            present: false,
        },
        {
            id_: 2,
            name: 'Clark Kent 2',
            role: 'Scout',
            archived: false,
            cancelled: false,
            present: false,
        },
        {
            id_: 3,
            name: 'Clark Kent 3',
            role: 'Scout',
            archived: false,
            cancelled: false,
            present: false,
        },
        {
            id_: 4,
            name: 'Clark Kent 4',
            role: 'Scout',
            archived: false,
            cancelled: false,
            present: false,
        },
        {
            id_: 5,
            name: 'Clark Kent 5',
            role: 'Scout',
            archived: false,
            cancelled: false,
            present: false,
        },
        {
            id_: 6,
            name: 'Clark Kent 6',
            role: 'Scout',
            archived: false,
            cancelled: false,
            present: true,
        },
        {
            id_: 7,
            name: 'Clark Kent 7',
            role: 'Scout',
            archived: false,
            cancelled: false,
            present: true,
        },
        {
            id_: 8,
            name: 'Clark Kent 8',
            role: 'Scout',
            archived: false,
            cancelled: false,
            present: true,
        },
        {
            id_: 9,
            name: 'Clark Kent 9',
            role: 'Scout',
            archived: false,
            cancelled: false,
            present: true,
        },
        {
            id_: 10,
            name: 'Clark Kent 10',
            role: 'Scout',
            archived: false,
            cancelled: false,
            present: true,
        },
        {
            id_: 11,
            name: 'Clark Kent 11',
            role: 'Scout',
            archived: false,
            cancelled: true,
            present: false,
        },
        {
            id_: 12,
            name: 'Clark Kent 12',
            role: 'Scout',
            archived: false,
            cancelled: true,
            present: false,
        },
        {
            id_: 13,
            name: 'Clark Kent 13',
            role: 'Scout',
            archived: false,
            cancelled: true,
            present: false,
        },
        {
            id_: 14,
            name: 'Clark Kent 14',
            role: 'Scout',
            archived: false,
            cancelled: true,
            present: false,
        },
        {
            id_: 15,
            name: 'Clark Kent 15',
            role: 'Scout',
            archived: false,
            cancelled: true,
            present: false,
        },
    ];

    let selectionTwoLine = '';
    // This value is updated when the component is initialized, based on the
    // selected Item's `selected` prop.
    let selectionIndex = null;
    let clickedGroup = 'nothing yet';
    let selectedRadio = 'Tom Hanks';
    let selectedCheckbox = ['Batman', 'Superman', 'Spiderman', 'The Joker'];
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
</script>
