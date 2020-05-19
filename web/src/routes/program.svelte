<svelte:head>
    <title>About</title>
</svelte:head>

<style>
    .paper-container {
        margin: .8em;
    }
</style>

<div>
    <div class="paper-container">
        <Paper class="paper-demo">
            <Title>Paper</Title>
            <Subtitle>This is a sheet of paper.</Subtitle>
            <Content>Paper is used to build an elevated surface.</Content>
        </Paper>
    </div>
</div>

<script>
    import Paper, {Title, Subtitle, Content} from '@smui/paper';

</script>