import LinkCard from "./LinkCard";
export default function LinkList({ links, refreshLinks }) {
  return (
    <div>
      <h2>Links</h2>
      {links.map((link) => {
        return (
          <LinkCard key={link._id} link={link} refreshLinks={refreshLinks} />
        );
      })}
    </div>
  );
}
