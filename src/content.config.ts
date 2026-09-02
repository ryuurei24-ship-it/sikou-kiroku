import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const questions = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/questions' }),
  schema: z.object({
    title: z.string(),
    // このテーマについて考えている、というタグ（複数可）
    topics: z.array(z.string()).default([]),
    // 最初に立てた日
    created: z.coerce.date(),
    // 直近で追記した日。追記するたびにここを更新する
    updated: z.coerce.date(),
    // この問いのきっかけになった記事・動画など。同じ記事から複数の問いが
    // 生じた場合は、それぞれのファイルに同じ内容を書けばよい
    sources: z
      .array(
        z.object({
          title: z.string(),
          url: z.string().url(),
        })
      )
      .optional()
      .default([]),
    draft: z.boolean().optional().default(false),
  }),
});

export const collections = { questions };
