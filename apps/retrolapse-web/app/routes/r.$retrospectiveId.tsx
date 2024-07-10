import {PageLayout} from "~/components/layout/page-layout";
import {useParams} from "@remix-run/react";
import {useQuery} from "@apollo/client/react/hooks/useQuery";
import {gql} from "@apollo/client/core/core.cjs";
import {CardContent} from "~/components/ui/card/card-content";
import {Card} from "~/components/ui/card/card";
import {MetaFunction} from "@remix-run/node";
import {ActivityCard} from "~/components/activities/activity-card";

const GET_RETROSPECTIVE = gql`
  query Retrospective($id: String!) {
    retrospective(id: $id) {
      id
      title
      created_at
      activities {
        title
        items {
          description
        }
      }
    }
  }
`;

export const meta: MetaFunction = () => {
  return [
    {title: "Retrolapse"},
    {name: "description", content: "Time to introspect!"},
  ];
};

export default function RetrospectivePage() {
  const params = useParams();

  const {loading, error, data} = useQuery(GET_RETROSPECTIVE, {
    variables: {id: params.retrospectiveId},
  });

  return (
    <PageLayout>
      <Card>
        <CardContent>
          {loading && (
            <p className="text-on-background/30 font-medium text-lg text-center pt-7 pb-4 px-4">Loading...</p>
          )}
          {error && (
            <p className="text-error/30 font-medium text-lg text-center pt-7 pb-4 px-4">{error.message}</p>
          )}
          {data && (
            <p className="text-on-background font-medium text-lg px-4 py-1">{data.retrospective.title}</p>
          )}
        </CardContent>
      </Card>

      {data && data.retrospective.activities.length > 0 && (
        <div className="flex flex-col gap-6 mt-6">
          <h2 className="text-3xl font-semibold text-center uppercase text-shadow">The 3L's</h2>

          {data.retrospective.activities.map((activity) => (
            <ActivityCard key={activity.title} activity={activity} onChange={() => {
            }}/>
          ))}
        </div>
      )}
    </PageLayout>
  );
}