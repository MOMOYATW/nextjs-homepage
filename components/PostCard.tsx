import React from "react";
import Link from "next/link";
import styles from "../styles/PostCard.module.css";
import Image from "next/image";

const PostCard = ({ post }: { post: any }) => {
  return (
    <Link href={`/posts/${post.id}`} className={styles.card}>
      <div className={styles.image_container}>
        <Image
          src={post.cover}
          alt={`${post.title[0].plain_text} cover`}
          width={200}
          height={200}
          placeholder="blur"
          blurDataURL="data:image/webp;base64,UklGRpAFAABXRUJQVlA4WAoAAAAgAAAAOQEArAAASUNDUMgBAAAAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAAAAAAAAAAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADZWUDggogMAALAeAJ0BKjoBrQA+MRiKRCIhiAowEAGCWlu/Ge6AfA0PuuPJUy7h9OqHv/2RYcn/kAtFR7EohyTGmKSzWnkPz/5vCcSI8Me6q3DfvyY0KjPUW3scDP0Wwh7xlsxUiSrd39YI30KX8acZN2DaknAY5RFiiOeST+xwcCCdCGy0/qLUo4pVPRuH1vErrHyCcIiiw91e5ZYdo4tBZ9WHlvaQzAdDeFfXY//3pBPWJY7bTzlyunEvjORHan6koW7pLSFYxDmvF+AR0un/P2QbJ25uJ7f1kY3/QOtK1rvb9qPeVfYbUi8LnpD2YVznpxA8ftcsXn7N1KefRf1iq9m6kKKAAP79WGHh9UT8mYE3UiZJiG3ssaJxT5fTS8HWmrBQi3p4zh7w4Ov396MANgRN+0za4qGiBsC2aDN+Om57s0O2qzV2E2fq+jzM9g6eX2yH7kP9Ay1Yr+DRWOe0LjEDklVMNz7F4zKp3lXsp4cRsEfFwzdI9cxnA94aYdTNbHZzqhJtc84siqhcmn/0K1o5/zHl9wH55Yy3iSEUIqlMNL7y6dHCixTVeUvcWuKLKXyM7lK614W/QGuJ/JtvH1BeYa5qpG5n38KmS6zkRQ6ZPQPWJPwmtY+YCnv/FoeaU2a6dg4L3eDZl7k9IPQkVhLjbvNu04vAwALSYiUJ6TPngKqZZgkeIfC2YKAxbO+WTZ08s7JHXJIkFz9ytyfACUZmM+lyU0wY5IH03NzQ7a2S1AU381QEb7LpNmtDVkFpIsCTZyTjnDsdtnOoLqpPuC0ft/Np8/Nz84aeacLLKu57q5t4XrmEIxe8QfXuWrAdrRuYddcxU+dayNfPJ9GVn1W90Pwid70aGsTQWTzqu/jYjIxzvPkc8ay4FnoUylpYPmmE9ZqZbI39VVu/VRC2mBFnZwnnweSSXyjQYwbUQi7Fd0X5X9N3FNUZOx/RtHQ93Gw1Zvn5+ax55zrpUsjUzmXGM9J2Ra/I9BlTUum7RlkE3R2HFUKHW0jfYc1lCiyAfBo/7JoYlab+5TPCMZAsmiIkryYL7Jm8Uax8SCO2jKIHnMvuwAAABTttTwciWAi4foEk7Xqd4cS7kTlTf7Tp6Rd+oO1UMqCc+EE+V88zNQJ+e8WFXlwBcj2c7kppPKWv8dgAAEyMLeZ3HTiQtRTF/41yBVNi4VC31pE8YO29sbVo75iniMZT5U40gEB5RgwAAACL736hIuY2c4d23aauFU+QAAAAAAAAAA=="
        ></Image>
      </div>
      <div className={styles.container}>
        <div className={styles.title}>
          <h2>
            {post.title.map((text: any, index: number) => text.plain_text)}
          </h2>
        </div>
        <div className={styles.time}>
          <span>{post.date}</span>
        </div>
        <div className={styles.excerpt}>{post.excerpt}</div>
        <div className={styles.tags}>
          {post.tags.map((tag: any, index: number) => (
            <div key={index}>{tag.name}</div>
          ))}
        </div>
      </div>
    </Link>
  );
};

export default PostCard;
