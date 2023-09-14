import ProfileSummary from "./summary";

export default function ProfileList({profiles, page}) {
  if (profiles.length > 0 && page.slug === "index") {
    return (
      <section>
          <div className="grid lg:grid-cols-2 2xl:grid-cols-3 justify-center gap-12 mt-8 md:mt-16">
            {profiles.map((profile, i) => (
              <ProfileSummary profile={profile} key={i} />
            ))}
          </div>
          <a href="/profiles/">
            <button className="button-primary rounded-lg">All Profiles</button>
          </a>
      </section>
    );
  }else if (profiles.length > 0) {
    return (
      <section>
        <div className="grid lg:grid-cols-2 2xl:grid-cols-3 justify-center gap-12 mt-8 md:mt-16">
          {profiles.map((profile, i) => (
            <ProfileSummary profile={profile} key={i} />
          ))}
        </div>
      </section>
    );
  };
  return;
}
