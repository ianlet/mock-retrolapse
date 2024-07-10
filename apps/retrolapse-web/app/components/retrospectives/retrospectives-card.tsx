import {CardContent} from "~/components/ui/card/card-content";
import {Card} from "~/components/ui/card/card";
import {CardBanner} from "~/components/ui/card/card-banner";
import {Retrospective} from "~/lib/retrospective";
import {formatDistance} from "date-fns";
import Routing from "~/routing";
import {Link} from "@remix-run/react";

interface RetrospectivesCardProps {
  loading?: boolean;
  retrospectives?: Retrospective[];
}

export function RetrospectivesCard({retrospectives, loading}: RetrospectivesCardProps) {
  return (
    <Card>
      <CardBanner onClick={() => {
        console.log('Starting new retrospective...')
      }}>
        + Start new retrospective
      </CardBanner>

      <CardContent>
        {loading && (
          <p className="text-on-background/30 font-medium text-lg text-center pt-7 pb-4 px-4">Loading...</p>
        )}

        {retrospectives && retrospectives.length === 0 && (
          <p className="text-on-background/30 font-medium text-lg text-center pt-7 pb-4 px-4">No existing
            retrospectives</p>
        )}

        {retrospectives && retrospectives.length > 0 && (
          <div className="flex flex-col mt-3">
            {retrospectives.map((retrospective) => (
              <Link to={Routing.retrospectives.show(retrospective.id)} key={retrospective.id}
                 className="px-4 py-2 hover:bg-primary/10">
                {retrospective.title} - {formatDistance(new Date(retrospective.created_at), new Date(), {addSuffix: true})}
              </Link>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
}