import { defineConfig } from "vitepress";

export default defineConfig({
  lang: "ja-JP",
  title: "Software Design Notes",
  description: "ソフトウェア設計を広く浅く学ぶためのノート",

  base: "/software-design-notes/",

  cleanUrls: true,
  lastUpdated: true,

  themeConfig: {
    nav: [
      { text: "ホーム", link: "/" },
      { text: "学習ロードマップ", link: "/guide/roadmap" },
      { text: "アーキテクチャ", link: "/architecture/" },
      { text: "設計原則", link: "/principles/" },
      { text: "パターン", link: "/patterns/" },
      { text: "DB", link: "/database/" },
      { text: "テスト", link: "/testing/" },
    ],

    sidebar: [
      {
        text: "はじめに",
        items: [
          { text: "このサイトについて", link: "/" },
          { text: "学習ロードマップ", link: "/guide/roadmap" },
        ],
      },
      {
        text: "設計の基礎",
        collapsed: false,
        items: [
          { text: "ソフトウェア設計とは", link: "/guide/software-design" },
          {
            text: "品質特性と設計判断",
            link: "/guide/quality-attributes",
          },
          {
            text: "分割と境界",
            link: "/guide/decomposition-and-boundaries",
          },
          {
            text: "凝集度と結合度",
            link: "/guide/cohesion-and-coupling",
          },
          {
            text: "依存関係の設計",
            link: "/guide/dependency-management",
          },
        ],
      },
      {
        text: "アーキテクチャ",
        collapsed: false,
        items: [
          { text: "全体像", link: "/architecture/" },
          {
            text: "レイヤードアーキテクチャ",
            link: "/architecture/layered-architecture",
          },
        ],
      },
      {
        text: "設計原則",
        collapsed: false,
        items: [
          { text: "全体像", link: "/principles/" },
          { text: "SOLID", link: "/principles/solid" },
        ],
      },
      {
        text: "デザインパターン",
        collapsed: true,
        items: [{ text: "全体像", link: "/patterns/" }],
      },
      {
        text: "データベース設計",
        collapsed: true,
        items: [{ text: "全体像", link: "/database/" }],
      },
      {
        text: "テスト設計",
        collapsed: true,
        items: [{ text: "全体像", link: "/testing/" }],
      },
    ],

    search: {
      provider: "local",
    },

    socialLinks: [
      {
        icon: "github",
        link: "https://github.com/SeiyaYamaoka/software-design-notes",
      },
    ],

    footer: {
      message: "自分用のソフトウェア設計ノート",
      copyright: "Copyright © 2026",
    },

    outline: {
      level: [2, 3],
      label: "目次",
    },

    docFooter: {
      prev: "前のページ",
      next: "次のページ",
    },

    lastUpdated: {
      text: "最終更新",
    },
  },
});
