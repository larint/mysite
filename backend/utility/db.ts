import faunadb from 'faunadb'
let q = faunadb.query
let client = new faunadb.Client({ secret: process.env.FAUNA_KEY as string })

class DB {

    static create = async (collectionName: string, data: Object) => {
        try {
            let result = await client.query(
                q.Create(q.Collection(collectionName), { data: data })
            )
        } catch (error) {

        }
    }

    static select = async (collectionName: string) => {
        try {
            let result = await client.query(
                q.Map(
                    q.Paginate(q.Documents(q.Collection(collectionName)), { size: 3 }),
                    q.Lambda("X", q.Get(q.Var("X")))
                )
            )

            return result
        } catch (error) {
            console.log(error)
        }
        return false
    }

    static selectPost = async (slug: string) => {
        try {
            let result = await client.query(
                q.Get(q.Match(q.Index('post_by_slug'), slug))
            )

            return result
        } catch (error) {
            console.log(error)
        }
        return false
    }

    static test = async () => {
        let r = await client.query(
            q.Get(q.Match(q.Index('post_by_slug'), 'how-i-organize-my-work-with-code'))
        )
        console.log(r);

        // client.query(
        //     q.CreateIndex({
        //         name: 'post_by_title',
        //         source: q.Collection('post'),
        //         terms: [
        //             { field: ['data', 'title'] },
        //         ]
        //     })
        // )
        //     .then((ret) => console.log(ret))
        //     .catch((err) => console.error('Error: %s', err))
    }
}

export { DB }