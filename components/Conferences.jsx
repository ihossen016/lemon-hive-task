import { gql } from "@apollo/client";
import { useSuspenseQuery } from "@apollo/experimental-nextjs-app-support/ssr";
import { useEffect, useState } from "react";

const query = gql`
    query Conferences {
        conferences {
            id
            name
            startDate
            endDate
        }
    }
`;

export default function Conference() {
    const { data } = useSuspenseQuery(query);
    // console.log(data.conferences);
    const [conferences, setConferences] = useState(null);

    useEffect(() => {
        setConferences(data.conferences);
    }, [data]);

    return (
        <>
            {!conferences && <h3>Loading....</h3>}

            {conferences &&
                conferences.map(item => <div key={item.id}>{item.name}</div>)}
        </>
    );
}
