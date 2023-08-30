import Link from "next/link";

interface Props {
  title: string;
  href: string;
}

const ListItem = ({ title, href }: Props) => {
  return (
    <Link href={href}>
      <li className="hover:text-primaryColor cursor-pointer duration-200">
        {title}
      </li>
    </Link>
  );
};

export default ListItem;
