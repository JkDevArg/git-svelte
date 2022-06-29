<script>
    export let humidity;
    export let wind_kph;
    export let feelslike_c;
</script>
<footer>
    <div>
        <span> {humidity}% </span>
        <strong> Humidity </strong>
    </div>
    <div>
        <span> {wind_kph}km/h </span>
        <strong> WindSpeed </strong>
    </div>
    <div>
        <span> {feelslike_c}% </span>
        <strong> Feels Like </strong>
    </div>
</footer>

<style>
    footer {
        border: 2px solid rgb(94, 94, 94);
        padding: 12px 0;
        width: 80%;
        margin: 0 auto;
        border-radius: 10px;
        display: flex;
        text-align: center;
        justify-content: space-evenly;
        position: absolute;
        left: 0;
        right: 0;
        bottom: 32px;
    }

    span{
        display: block;
        font-weight: 600;
        font-size: 14px;
    }

    strong{
        display: block;
        font-size: 14px;
        font-weight: 500;
    }
</style>