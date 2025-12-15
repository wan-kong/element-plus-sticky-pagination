export interface Item {
    id: number
    name: string
    age: number
}

export const getData = (params: {
    page: number,
    pageSize: number
}) => {
    const total = 100
    return new Promise<{
        total: number
        data: Item[]
    }>(resolve => {
        setTimeout(() => {
            const data = []
            for (let i = 0; i < params.pageSize; i++) {
                data.push({
                    id: i,
                    name: `name${i}`,
                    age: i,
                    gender: i % 2 === 0 ? 'male' : 'female'
                })
            }
            resolve({
                data,
                total
            })

        }, 1000);
    })
}