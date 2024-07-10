import {MetaFunction} from "@remix-run/node";
import {gql} from "@apollo/client/core/core.cjs";
import {useQuery} from "@apollo/client/react/hooks/useQuery";
import {parseRetrospectives} from "~/lib/retrospective";
import {RetrospectivesCard} from "~/components/retrospectives/retrospectives-card";
import {PageLayout} from "~/components/layout/page-layout";

export const meta: MetaFunction = () => {
  return [
    {title: "Retrolapse"},
    {name: "description", content: "Time to introspect!"},
  ];
};

const RETROSPECTIVES_QUERY = gql`
  query GetRetrospectives {
    retrospectives {
      id
      title
      created_at
    }
  }
`;

export default function Index() {
  const {data, loading} = useQuery(RETROSPECTIVES_QUERY);
  const retrospectives = parseRetrospectives(data);

  return (
    <PageLayout>
      <RetrospectivesCard retrospectives={retrospectives} loading={loading}/>
    </PageLayout>
  );
}
