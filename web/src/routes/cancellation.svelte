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
</script>
