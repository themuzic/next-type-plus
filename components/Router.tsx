import Link from "next/link";

type RouterProps = {
  path: string,
  name: string,
  isActive: boolean,
  isLogo: boolean,
}

export default function Router({ path, name, isActive, isLogo }: RouterProps) {
  return (
    <Link href={path}>
      <a className={isActive ? "active" : ""}>
        {isLogo ? (
          <img
            src="https://static-assets.bamgrid.com/product/disneyplus/images/logo.1a56f51c764022ee769c91d894d44326.svg"
            alt=""
          />
        ) : (
          <span>{name}</span>
        )}
      </a>
    </Link>
  );
}
