export default function ProfileSummary({ profile }) {
  const {
    data: { name, designation, image, image_alt },
    slug,
  } = profile;
  return (
    <>
      <div className="flex justify-center">
        <article className="block">
          <a href={`/profiles/${slug}`}>
            <img
              className="rounded-lg"
              src={image}
              alt={image_alt}
              loading="lazy"
            />
          </a>
          <a className="flex flex-col justify-start mt-2 max-w-[500px]" href={`/blog/${slug}`}>
            <p className="text-2xl font-semibold">{name}</p>
            <p className="font-light">{designation}</p>
          </a>
        </article>
      </div>
    </>
  );
}
