<svelte:head>
    <title>Akela</title>
</svelte:head>

<style>
    .paper-container {
        margin: .8em;
    }
</style>

<div>
    <div class="paper-container">
        <Paper class="paper-demo">
            <Title>Pionieren</Title>
            <Subtitle>Zaterdag 23 mei, 13:30 - 16:30</Subtitle>
            <Content>We gaan een tafel pionieren om te trainen voor RSW. Als de tafels gebouwd zijn hebben we wat
                pannenkoekenbeslag en kan iedereen even wat bakken. Daarna afbreken, opruimen en afsluiten.
		<!--                <Button>Volledige programma bekijken</Button>-->
            </Content>

        </Paper>
    </div>
</div>

<script>
    import Paper, {Title, Subtitle, Content} from '@smui/paper';
    import Button, {Group, GroupItem, Label, Icon} from '@smui/button';

</script>
