<script>
    import { onInterval } from '../helper/interval-example.js';

    let seconds = 0;
    onInterval(() => seconds += 1, 1000);
</script>