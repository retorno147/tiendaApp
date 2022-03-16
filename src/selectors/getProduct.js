export const getProduct = (name = "", products) => {
    if (name === "") {
        return [];
    }
    name = name.toLocaleLowerCase();
    const space = name.includes(" ");
    let index2 = name.indexOf(" ");
    let name2 = name.substring(0, index2);
    const str = space ? name2 : name;
    const result = products.filter((product) =>
        product?.brand?.toLocaleLowerCase().includes(str)
    );

    if (result.length !== 0 && space) {
        let index = name.indexOf(" ");
        let model = name.substring(index + 1, name.length);
        if (model === "") {
            return result;
        } else {
            return result.filter((product) =>
                product?.model?.toLocaleLowerCase().includes(model)
            );
        }
    } else if (result.length === 0) {
        return products.filter((product) =>
            product?.model?.toLocaleLowerCase().includes(name)
        );
    } else {
        return result;
    }
};
