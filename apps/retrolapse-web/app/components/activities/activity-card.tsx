import {CardBanner} from "~/components/ui/card/card-banner";
import {Card} from "~/components/ui/card/card";
import {CardContent} from "~/components/ui/card/card-content";
import {Activity} from "~/lib/retrospective";

interface ActivityCardProps {
  activity: Activity;
  onChange: (activity: Activity) => void;
}

export function ActivityCard({ activity }: ActivityCardProps) {
  return (
    <Card>
      <CardBanner onClick={() => {
      }}>
        + {activity.title}
      </CardBanner>
      <CardContent>
        <div className="flex flex-col gap-2 mt-4 px-4 py-2 bg-primary/10 shadow-inner">
        {activity.items.map((item) => (
            <div key={`activity-item-${item.description}`} className="px-3 py-2 bg-background shadow rounded">
              <p className="text-on-background">{item.description}</p>
            </div>
        ))}
        </div>
      </CardContent>
    </Card>
  )
}