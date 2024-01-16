const convertData = (data, type) => {

    return data.map(item => {
        const date = new Date(item[0]);
        return {
            date: `${date.getHours().toString().padStart(2, "0")}:${date
                .getMinutes()
                .toString()
                .padStart(2, "0")} ${(date.getMonth() + 1)
                .toString()
                .padStart(2, "0")}/${date
                .getDate()
                .toString()
                .padStart(2, "0")}/${date.getFullYear()}`,
            [type]: type === "prices" ? item[1] : Math.round(item[1]),
        };
    });
};

export { convertData };
