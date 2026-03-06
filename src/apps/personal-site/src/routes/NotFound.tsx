import { Title, SubTitle, CustomLink } from "@chetterich/ui";

export function NotFound() {
  return (
    <div>
      <Title className="not-found-title">
        <i>404</i>
      </Title>
      <SubTitle>Hello traveler, it seems that you have lost your way.</SubTitle>
      <CustomLink href="/" color="#ff6463" linkType="internal" linkStyle="filled">
        Home
      </CustomLink>
    </div>
  );
}
