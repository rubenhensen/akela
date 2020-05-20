<script>
    let name;
    let email;
    let password;
</script>

<!--<div class="center">-->
<!--    <h2>Register</h2>-->
<!--    <form on:submit|preventDefault={handleSubmit}>-->
<!--        <div>-->
<!--            <Textfield variant="outlined" withLeadingIcon bind:value={name} label="Name"-->
<!--                       input$aria-controls="helper-text-outlined-b" input$aria-describedby="helper-text-outlined-b">-->
<!--                <Icon class="material-icons">person</Icon>-->
<!--            </Textfield>-->
<!--            &lt;!&ndash;        <HelperText id="helper-text-outlined-b">Helper Text</HelperText>&ndash;&gt;-->
<!--            &lt;!&ndash;        <pre class="status">Value: {valueOutlinedB}</pre>&ndash;&gt;-->
<!--        </div>-->
<!--        <div>-->
<!--            <Textfield variant="outlined" withLeadingIcon bind:value={email} label="E-mail"-->
<!--                       input$aria-controls="helper-text-outlined-b" input$aria-describedby="helper-text-outlined-b">-->
<!--                <Icon class="material-icons">email</Icon>-->
<!--            </Textfield>-->
<!--            &lt;!&ndash;        <HelperText id="helper-text-outlined-b">Helper Text</HelperText>&ndash;&gt;-->
<!--            &lt;!&ndash;        <pre class="status">Value: {valueOutlinedB}</pre>&ndash;&gt;-->
<!--        </div>-->
<!--        <div>-->
<!--            <Textfield variant="outlined" withLeadingIcon bind:value={password} label="Password"-->
<!--                       input$aria-controls="helper-text-outlined-b" input$aria-describedby="helper-text-outlined-b"-->
<!--                       type="password">-->
<!--                <Icon class="material-icons">lock</Icon>-->
<!--            </Textfield>-->
<!--            &lt;!&ndash;        <HelperText id="helper-text-outlined-b">Helper Text</HelperText>&ndash;&gt;-->
<!--            &lt;!&ndash;        <pre class="status">Value: {valueOutlinedB}</pre>&ndash;&gt;-->
<!--        </div>-->
<!--        <div>-->
<!--            <Button type="submit" variant="raised"><Label>Register</Label></Button>-->
<!--            <span>- or -</span>-->
<!--            <Button type="button" on:click={() => goto('/signin')} ripple={false}><Label>Log in</Label></Button>-->
<!--        </div>-->
<!--    </form>-->
<!--</div>-->