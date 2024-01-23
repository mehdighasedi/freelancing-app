export default function toLocaleDateShort(date, format) {
    return new Date(date).toLocaleDateString(format,
        {
            month: "long"
            , day: "numeric"
            , year: "numeric"
        });

}