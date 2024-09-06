import { Badge } from "@/app/_components/badge";
import { IconArrowLeft,  IconClock } from "@/app/_components/icons/icons";
import { Price } from "@/app/_components/price/price";
import { CourseSummary } from "@/types/course-summary.interface";
import Image from "next/image";
import Link from "next/link";

export type CourseCardProps = CourseSummary & {};

export const CourseCard: React.FC<CourseCardProps> = ({
  coverImageId,
  title,
  subTitle,
  level,
  recordStatus,
  basePrice,
  duration,
  slug,
}: CourseCardProps) => {
  return (
    <div className="card">
      <figure>
        <Image
          src={`https://api.classbon.com/api/picture/${coverImageId!}`}
          alt={title}
          width={550}
          height={327}
        />
      </figure>
      <div className="mt-2 flex gap-2 font-semibold dark:text-info px-3 py-2">
        <Badge variant="info">{recordStatus}</Badge>
        <Badge variant="accent">{level}</Badge>
      
      </div>
      <div className="card-body">
        <Link href={`/course/${slug}`} className="card-title">
          {title}
        </Link>
        <p>{subTitle}</p>
        
        <div className="flex items-center justify-between">
          <Badge variant="warning" ><IconClock width={15} height={15}/> {duration} </Badge>
          <Price price={basePrice} size="small"/>
        </div>
      </div>

      <Link
        className="card-footer animated-icon justify-center"
        href={`/courses/${slug}`}
      >
        مشاهده جزئیات دوره
        <IconArrowLeft fill="currentColor"/>
      </Link>
    </div>
  );
};
