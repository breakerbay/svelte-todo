<script>
    const fetchImage = (async () => {
        const response = await fetch('http://brogo.net.au/checklist/api/gallery')
        return await response.json()
    })()
</script>

{#await fetchImage}
    <p>...waiting</p>
{:then data}
<!--    <img src={data.message} alt="Dog image" />-->
    <h3>To Do</h3>
{:catch error}
    <p>An error occurred!</p>
{/await}
