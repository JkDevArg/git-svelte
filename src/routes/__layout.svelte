<div>
    <slot />
</div>

<style>
    :global(body ){
        background-color: #fdfdfd;
        display: grid;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        place-content: center;
        margin: 0;
        min-height: 100vh;
    }

    :global(*, *::after, *::before){
        box-sizing: border-box;
    }

    :global(h1, h2, h3, h4, h5){
        margin: 0;
    }

    div {
        aspect-ratio: 9 / 16;
        max-width: 100%;
        width: 320px;
        display: block;
        box-shadow: 0 0 20px 1px rgba(0, 0, 0, 0.1);
        border-radius: 8px;
        position: relative;
    }
</style>