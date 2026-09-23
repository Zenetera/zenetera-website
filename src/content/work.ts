/* ──────────────────────────────────────────────────────────
   Work / case studies
   ──────────────────────────────────────────────────────────
   Every project lives in the `caseStudies` array below and is
   shown in three places:

     /                  "Selected work" strip: the featured project
                        plus the next two, as cover cards.
     /work              Lead card for the featured project, then a
                        three-column grid of the rest.
     /work/<slug>       Full case study: headline, details row,
                        cover, story sections (one image sits in the
                        text column, two run side by side), stat
                        grid, testimonial, next project, CTA.

   Images go in /public/images/work/<slug>/ and are referenced by
   path. Recommended sizes:
     cover          1600 × 1000 (16:10), JPG or PNG
     full-width     1600 × 1000
     side-by-side   1200 × 900 (4:3)
   A 4:3 image shown on its own needs `aspect: "4 / 3"`, or it is
   cropped to 16:10.

   Fields are documented in `src/lib/types.ts` (CaseStudy). The
   order of the array is the display order. Mark one project
   `featured: true` to lead.

   The first five entries, IKAT, Rêve Beauté, Sunset Villa,
   Crown Corner and Lumora Games, are real builds. IKAT, Rêve
   Beauté and Crown Corner are shown under new names, and their
   screenshots come from rebranded copies of each site. Lumora
   Games is a real build under an invented name, and every line
   marked [dummy] in it is invented. Replace those lines with real
   content, or delete them, before the site goes live.

   The three entries after them, Kestrel Accountancy, Linden
   Dental Studio and Brighton Plumbing Co., are SAMPLES with
   invented clients, numbers and quotes. Their artwork is mocked
   up for this page, not taken from real builds. Replace them with
   real projects, or delete them and their image folders, before
   the site goes live.
   ────────────────────────────────────────────────────────── */

import type { CaseStudy } from "@/lib/types";

export const caseStudies: CaseStudy[] = [
  {
    slug: "ikat",
    client: "IKAT",
    title: "A Silk Road restaurant with a menu you turn like a book",
    summary:
      "A nine-page website in English and Russian for a Silk Road restaurant in Canggu, built around a menu you turn like a real book and a four-step table request.",
    sector: "Restaurant & hospitality",
    location: "Canggu, Bali",
    services: ["Web design", "Web development"],
    year: "2026",
    featured: true,
    cover: {
      src: "/images/work/ikat/cover.jpg",
      alt: "IKAT home page on desktop, with the logo beside a photograph of the dining room",
    },
    sections: [
      {
        heading: "Overview",
        lede: "Plov, shashlik and dumplings from Samarkand to Beirut, cooked over coals in Canggu.",
        body: [
          "IKAT bills itself as the first Silk Road restaurant in Bali. It takes its name from the Indonesian word for a way of dyeing and weaving cloth that turns up in silks from Bali to Bukhara. Its head chef trained in Uzbekistan and then Moscow, the kitchen runs from nine in the morning until one at night, and there is live oud on Fridays.",
          "The restaurant came to us with a brand book, 145 food and drink photographs, and English and Russian copy for every page. Our job was to turn that into a website that feels like the restaurant, in either language.",
        ],
        bullets: [
          "Nine pages in English and Russian",
          "A menu book you turn page by page",
          "A four-step table request",
          "Gallery, journal and long-form article template",
          "A web design system built from the brand book",
          "Handover docs for whoever runs the site next",
        ],
      },
      {
        heading: "The challenge",
        lede: "A story told in five chapters, a photo library of one subject, and a menu that had to feel real.",
        body: [
          "The brand tells its history in five chapters, from the trade route to the legend of the building and its merchant. That story had to read well, and read the same, in English and in Russian.",
          "All 145 photographs were portrait, and every one showed food or drink. Rather than invent gallery categories the pictures could not fill, we built them around what the camera had captured: The table, Mangal and Bar.",
          "And the menu could not be a PDF. It needed to feel like the object a guest is handed at the table.",
        ],
        media: [
          {
            src: "/images/work/ikat/gallery.jpg",
            alt: "The gallery page, a grid of food and cocktail photographs",
          },
        ],
      },
      {
        heading: "The menu book",
        lede: "A leather-bound menu on the home page, with pages you turn by hand.",
        body: [
          "The home page opens a menu book with a leather cover and endpapers. Visitors turn its pages by dragging a corner or tapping a page, or with the arrow buttons and the keyboard. The full menu, all eight courses of it, has a page of its own.",
        ],
        media: [
          {
            src: "/images/work/ikat/menu-book.jpg",
            alt: "The menu book on the home page, open at salads and dumplings",
          },
        ],
      },
      {
        heading: "Booking a table",
        lede: "Four short steps to a table, from breakfast to the late sitting.",
        body: [
          "Guests pick a day from the next seven, shown in Bali time, then a service: breakfast, lunch, dinner or late. Next comes the size of the party, then their contact details. Entries are checked on the page as they go, and the form is ready to connect to whichever form service the restaurant chooses.",
        ],
        media: [
          {
            src: "/images/work/ikat/booking.jpg",
            alt: "The table request, with day, time and guest steps",
          },
        ],
      },
      {
        heading: "On the phone",
        lede: "Built for the phone in a guest's hand, not shrunk to fit it.",
        body: [
          "On phones, a Reserve and Call bar stays pinned to the bottom of every page, so booking is always one tap away. The gallery's 18 photographs can be filtered by category and open in a lightbox.",
          "Scroll reveals and parallax give the pages depth, and all of it switches off for visitors who prefer reduced motion.",
        ],
        media: [
          {
            src: "/images/work/ikat/mobile-home-menu.jpg",
            alt: "The home and menu pages on a phone, with the Reserve and Call bar",
          },
          {
            src: "/images/work/ikat/mobile-booking-gallery.jpg",
            alt: "The table request and gallery on a phone",
          },
        ],
      },
      {
        heading: "Built to hand over",
        lede: "Two languages from one set of pages, and a site that runs anywhere.",
        body: [
          "English and Russian share the same markup. The language switcher remembers each visitor's choice, and with JavaScript turned off the site still reads correctly in English.",
          "The brand book became a web design system: Cormorant Garamond italic paired with Oswald, an eight-point star pattern and a set of colour tokens. It is written up in the docs and shown on a live page, so anyone extending the site can see the rules at work.",
        ],
        bullets: [
          "Static site with no build step, so it runs on any host",
          "One third-party library, bundled with the site",
          "Handover docs for architecture, development and content status",
        ],
      },
    ],
    stats: [
      { value: "9", label: "pages, plus a live brand-system page" },
      { value: "2", label: "languages, English and Russian, from one set of markup" },
      { value: "24 MB", label: "of web images, cut down from 2.3 GB of originals" },
      { value: "1", label: "third-party library, bundled with the site" },
    ],
  },
  {
    slug: "reve-beaute",
    client: "Rêve Beauté",
    title: "A skincare studio with a page for everything it sells",
    summary:
      "An eleven-page website for a skincare and waxing studio, with its treatments, memberships, packages and training courses each on a page of their own.",
    sector: "Beauty & skincare",
    services: ["Web design", "Web development"],
    year: "2026",
    cover: {
      src: "/images/work/reve-beaute/cover.jpg",
      alt: "Rêve Beauté home page on desktop, with “Reveal Your Natural Glow” over a portrait",
    },
    sections: [
      {
        heading: "Overview",
        lede: "A skincare and waxing studio that sells far more than appointments.",
        body: [
          "Rêve Beauté is a studio for facials, waxing and skin treatments. Alongside single appointments it sells memberships, treatment packages, gift cards and training courses.",
          "The website had to explain all of that clearly without burying the thing most visitors come for: booking a treatment.",
        ],
        bullets: [
          "Eleven pages, plus a 404 page",
          "A treatment menu of 12 treatments in three tabs",
          "Three membership tiers and four treatment packages",
          "A training courses page with a full syllabus for each course",
          "Reviews, an FAQ in four topics, deals and gift cards",
          "A static front end built with React, Vite and Tailwind",
        ],
      },
      {
        heading: "The challenge",
        lede: "Four very different things to sell, and one button that matters most.",
        body: [
          "A facial is chosen on price, time and results. A membership is chosen on what it includes. A training course is chosen on level, class size and what the syllabus covers. Putting all of that on one page would have made every one of them harder to choose.",
          "So each offer got a page of its own, laid out around the details people compare, and the Book Now button follows visitors from page to page.",
        ],
        media: [
          {
            src: "/images/work/reve-beaute/treatments.jpg",
            alt: "Home page treatments section: facials, waxing and skincare",
          },
        ],
      },
      {
        heading: "The treatment menu",
        lede: "Twelve treatments in three tabs, each with its price, time and benefits.",
        body: [
          "The Services page splits the menu into Facials, Waxing and Skincare treatments. Every treatment shows its price, how long it takes and what it does, so a visitor can choose without having to ask.",
        ],
        media: [
          {
            src: "/images/work/reve-beaute/services.jpg",
            alt: "Services page with Facials, Waxing and Skincare tabs",
          },
        ],
      },
      {
        heading: "Memberships and packages",
        lede: "Three memberships, four packages, and a clear favourite.",
        body: [
          "The three membership tiers sit side by side, with the most popular plan highlighted so the comparison has an obvious answer. Four treatment packages, a deals page and gift cards give visitors other ways in, each on a page of its own.",
        ],
        media: [
          {
            src: "/images/work/reve-beaute/memberships.jpg",
            alt: "Three membership tiers, with the most popular plan highlighted",
          },
        ],
      },
      {
        heading: "Courses and answers",
        lede: "Training laid out like a prospectus, and answers before anyone has to ask.",
        body: [
          "The courses page lists four training courses, each with its level, length, class size, price and full syllabus.",
          "A reviews page sits alongside an FAQ grouped into four topics: booking and appointments, treatments and services, memberships and payments, and before and after care.",
        ],
      },
      {
        heading: "On the phone",
        lede: "The Book Now button is never more than a thumb away.",
        body: [
          "On desktop, Book Now sits in the navigation. On phones, a floating Book Now button appears once visitors start scrolling, and the menu opens full screen.",
          "Every booking, membership and course button leads to the same appointment request form on the contact page, alongside the opening hours and a map.",
        ],
        media: [
          {
            src: "/images/work/reve-beaute/mobile-home-services.jpg",
            alt: "Home and services pages on a phone",
          },
          {
            src: "/images/work/reve-beaute/mobile-memberships-menu.jpg",
            alt: "Memberships page and the full-screen menu on a phone",
          },
        ],
      },
    ],
    stats: [
      { value: "11", label: "pages, from treatments to training courses" },
      { value: "12", label: "treatments across three categories" },
      { value: "3", label: "membership tiers, with the most popular highlighted" },
      { value: "4", label: "training courses, each with its own syllabus" },
    ],
  },
  {
    slug: "sunset-villa",
    client: "Sunset Villa",
    title: "Direct bookings without the platform's cut",
    summary:
      "A villa owner in Greece who took 95% of bookings through Booking.com now takes booking requests on their own website, with no commission, and runs every stay from one dashboard.",
    sector: "Holiday villa rental",
    location: "Greece",
    services: ["Web design", "Web development", "Booking system"],
    year: "2026",
    cover: {
      src: "/images/work/sunset-villa/cover.jpg",
      alt: "Sunset Villa home page on desktop, with the villa lit up at dusk",
    },
    sections: [
      {
        heading: "Overview",
        lede: "One villa, one busy season, and almost every booking going through a platform.",
        body: [
          "The owner lets a single holiday villa in Greece. It sleeps up to ten, mostly families with children and groups of young adults, across a season that runs from May to October and peaks in July and August. Most stays last three to eight nights.",
          "About 95% of bookings came through Booking.com and the rest through Airbnb, and both take commission. The owner wanted a website of their own, so guests could book direct and the platforms would matter less.",
        ],
        bullets: [
          "A one-page villa site in English and Greek",
          "A live availability calendar with nightly prices",
          "An instant quote with seasonal rates, tourist tax and deposit",
          "Booking requests the owner approves personally",
          "An owner dashboard for bookings, payments, prices and content",
        ],
      },
      {
        heading: "The challenge",
        lede: "Taking bookings direct, on the owner's own terms.",
        body: [
          "There was no website at all, and the only record of availability was the Booking.com calendar. The platform confirms guests instantly, but the owner wanted to approve every request personally.",
          "The villa also has its own terms: a 10% non-refundable deposit, the balance paid on arrival, and a €15-a-night tourist tax shown upfront. The owner chose not to sync the site with the platform calendars, so it needed an availability system of its own, and all of it had to work in Greek and English.",
        ],
      },
      {
        heading: "The guest site",
        lede: "Pick your dates, see the price, send a request.",
        body: [
          "The site is a single page: a full-screen hero, the villa's details, amenities and house rules, a photo gallery with a lightbox, a map and a contact form. Terms and privacy pages sit alongside it, and the owner can edit both.",
          "The booking calendar shows each night's price and crosses out nights already taken. As guests pick their dates, the quote builds itself from the seasonal rates and the tourist tax, then shows the total and the 10% deposit. Sending a request emails the guest a reference code and notifies the owner with the details.",
        ],
        media: [
          {
            src: "/images/work/sunset-villa/booking.jpg",
            alt: "The villa details beside the booking calendar and price quote",
          },
        ],
      },
      {
        heading: "The owner dashboard",
        lede: "Every request, payment and check-in on one screen.",
        body: [
          "The dashboard opens on the month so far: revenue, occupancy, pending requests, and the next check-in and check-out. Bookings can be searched, filtered by status and exported as a spreadsheet.",
          "Confirming a request takes one click. It blocks the dates, emails the guest, and warns the owner about any other pending requests for the same nights. Each booking also tracks its payment, from unpaid to deposit paid to paid in full.",
          "The dashboard screenshots on this page use sample bookings.",
        ],
        media: [
          {
            src: "/images/work/sunset-villa/dashboard.jpg",
            alt: "The owner's bookings dashboard, shown with sample bookings",
          },
        ],
      },
      {
        heading: "The season at a glance",
        lede: "A year of bookings, prices and blocked dates in one calendar.",
        body: [
          "The calendar shows the whole year, with bookings, nightly prices and manual blocks for the owner's own stays or bookings taken on the platforms. Seasonal pricing rules, such as a higher rate for July and August, set the prices guests see.",
          "The owner edits everything else in both languages too: the villa's details, its photos, the contact details and the legal pages. Photos can be uploaded, reordered and given a cover.",
        ],
        media: [
          {
            src: "/images/work/sunset-villa/calendar.jpg",
            alt: "The owner's calendar with bookings and seasonal prices, shown with sample bookings",
          },
        ],
      },
      {
        heading: "On the phone",
        lede: "Mobile-first for guests, and a dashboard that fits in the owner's pocket.",
        body: [
          "The guest site is built mobile-first, with photos served at the right size for each screen. The owner dashboard works on a phone too, so the season and any new requests are never far away.",
        ],
        media: [
          {
            src: "/images/work/sunset-villa/mobile-home-booking.jpg",
            alt: "The villa home page and booking calendar on a phone",
          },
          {
            src: "/images/work/sunset-villa/mobile-dashboard-calendar.jpg",
            alt: "The owner's bookings dashboard and calendar on a phone",
          },
        ],
      },
      {
        heading: "Built to hand over",
        lede: "Owned by the owner from day one, for about €5 a month.",
        body: [
          "Every account is in the client's name from the start. Hosting costs about €5 a month, plus the domain.",
          "Under the hood it is a React and TypeScript front end with a Node and Express API and a PostgreSQL database, with Cloudinary handling images and Brevo sending email. The build took about four weeks, from late March to late April 2026.",
        ],
      },
    ],
    stats: [
      { value: "0%", label: "commission on direct bookings" },
      { value: "2", label: "languages, English and Greek" },
      { value: "4 wks", label: "from first commit to finished build" },
      { value: "€5/mo", label: "roughly, to host and run, plus the domain" },
    ],
  },
  {
    slug: "crown-corner",
    client: "Crown Corner",
    title: "A shop window for watches that aren't for sale",
    summary:
      "A two-page website for a private watch-sourcing service, showing the watches it has found and turning a request for a specific model into a ready-to-send enquiry.",
    sector: "Luxury watch sourcing",
    services: ["Web design", "Web development"],
    year: "2026",
    cover: {
      src: "/images/work/crown-corner/cover.jpg",
      alt: "Crown Corner home page on desktop, with a Patek Philippe Nautilus beside the headline",
    },
    sections: [
      {
        heading: "Overview",
        lede: "Name the watch, and they go and find it.",
        body: [
          "Crown Corner sources luxury watches by enquiry only, and its home page puts the promise plainly: if it has a crown, they can source it. A buyer names the model, the firm's four desks search a supplier network across Hong Kong, London, Dubai and the USA, and an initial quote comes back within 24 hours. The brands include Richard Mille, Patek Philippe, Rolex, Audemars Piguet, F.P. Journe and Vacheron Constantin.",
          "They hold no stock and sell nothing online. Every watch is checked by an independent third party before any money changes hands, then hand-delivered anywhere in the world.",
          "They came to us with their logo, photos of watches they had sourced, and three short phone videos of watches in hand.",
        ],
        bullets: [
          "A landing page and a Request a Quote page",
          "A Recently Sourced grid of six watches",
          "Three films of watches in hand",
          "An enquiry form beside a three-step guide to the service",
          "A floating WhatsApp button on every page",
          "Plain HTML, CSS and JavaScript, with no build step or server",
        ],
      },
      {
        heading: "The challenge",
        lede: "Selling a service with pictures that look like stock.",
        body: [
          "A grid of expensive watches reads like a shop. This one had to read as proof of what the firm can find, so the caption beside it says plainly that nothing shown is held in stock or for sale.",
          "The footage was short portrait video shot on a phone, which looks soft stretched across a wide screen. And buyers at this price expect privacy, so the copy makes clear that each enquiry is handled by one person and shared with no one.",
        ],
      },
      {
        heading: "Recently sourced",
        lede: "Six watches as proof, not a price list.",
        body: [
          "The landing page opens on a strip of the brands they source. The Recently Sourced grid shows six watches the firm has found, each with its brand and reference.",
          "Below it come the four desks, the authentication promise, and the three promises of the service: quotes within 24 hours, discretion and hand delivery. A closing call to action leads to the enquiry form.",
        ],
        media: [
          {
            src: "/images/work/crown-corner/recently-sourced.jpg",
            alt: "The Recently Sourced grid, captioned as not held in stock or for sale",
          },
        ],
      },
      {
        heading: "In hand",
        lede: "Phone footage, shown at a size that suits it.",
        body: [
          "Two full-width breaks run looping film behind the page. On wide screens the film fills the background blurred, while a sharp copy plays close to its real size to one side, so the footage never looks stretched.",
          "The In Hand section shows three films of watches before handover. They stay silent until tapped, and only one plays sound at a time. Every film loads and plays only while it is on screen.",
        ],
        media: [
          {
            src: "/images/work/crown-corner/in-hand.jpg",
            alt: "The In Hand section, three portrait films of watches before handover",
          },
        ],
      },
      {
        heading: "The enquiry",
        lede: "From a model name to a ready-to-send enquiry.",
        body: [
          "The Request a Quote page asks for a name, an email or WhatsApp number, the brand and model, a budget range, the condition and a timeframe, and turns the answers into an enquiry ready to send.",
          "Beside the form, three steps explain how the service works, from the first message to hand delivery.",
        ],
        media: [
          {
            src: "/images/work/crown-corner/enquiry.jpg",
            alt: "The Request a Quote page, with the enquiry form beside three steps",
          },
        ],
      },
      {
        heading: "Around the site",
        lede: "Quiet, quick, and never more than a tap from WhatsApp.",
        body: [
          "A floating WhatsApp button sits on every page. The header hides as visitors scroll down and comes back when they scroll up, and the navigation highlights the section they are in.",
          "Scroll reveals, parallax and buttons that lean toward the cursor all switch off for visitors who prefer reduced motion, and the pages still work with JavaScript turned off. It is plain HTML, CSS and JavaScript with no build step, dependencies or server, so it runs on any host.",
        ],
        media: [
          {
            src: "/images/work/crown-corner/mobile-home-sourced.jpg",
            alt: "The home page and the Recently Sourced grid on a phone",
          },
          {
            src: "/images/work/crown-corner/mobile-films-enquiry.jpg",
            alt: "An In Hand film and the enquiry form on a phone",
          },
        ],
      },
    ],
    stats: [
      { value: "2", label: "pages, a landing page and an enquiry form" },
      { value: "6", label: "watches in the Recently Sourced grid" },
      { value: "3", label: "films of watches in hand" },
      { value: "0", label: "dependencies, build steps or servers" },
    ],
  },
  {
    /* Real build, invented client name. Lines marked [dummy] are
       invented: replace or delete them before the site goes live. */
    slug: "lumora",
    client: "Lumora Games",
    title: "Every support ticket, on every server, in one place",
    summary:
      "A game studio whose player support was scattered across Discord DMs and channels now handles every ticket, on both its servers, through one Discord bot and a web dashboard with AI summaries.",
    sector: "Gaming & online communities",
    location: "Tokyo, Japan", // [dummy]
    services: ["Web design", "Web development", "Discord bot", "AI integration"],
    year: "2025",
    cover: {
      src: "/images/work/lumora/all-tickets.jpg",
      alt: "Lumora Support Hub on desktop, with every ticket from both servers in one list, showing set, SLA, priority and owner",
    },
    sections: [
      {
        heading: "Overview",
        lede: "Player support for two Discord servers, handled where the players already are.",
        body: [
          // [dummy] "an independent game studio"
          "Lumora Games is an independent game studio with two Discord servers: Lumora Community, the main player community, and Lumora Gaming Hub. All of its player support happens on Discord, from game bugs and billing problems to reports about other players and role requests.",
          "The studio wanted a ticket system inside Discord, where its players already are, and somewhere staff could manage the whole queue outside it. The team works in English and Japanese. The studio's name has been changed on this page.",
        ],
        bullets: [
          "A Discord ticket bot for every server",
          "One conversation across Discord and the web",
          "A staff dashboard with live updates, analytics and exports",
          "AI ticket summaries and a staff assistant",
          "English and Japanese, in light and dark mode",
        ],
      },
      {
        // [dummy] the shape is inferred from the build; the details are invented
        heading: "The challenge",
        lede: "Support lived in DMs and busy channels, and nothing stayed put.",
        body: [
          "Requests arrived as direct messages to moderators or as posts in public channels. They were easy to lose, and nothing was kept once they scrolled away.",
          "Nobody could see who was handling what, so some players got two answers and some got none. Each server was run on its own, with no view across both, and there were no numbers at all: no count of open tickets, no response times, and no sense of who was carrying the load.",
        ],
      },
      {
        heading: "Tickets in Discord",
        lede: "One button in Discord opens a private channel with the staff.",
        body: [
          "The bot posts a welcome message with an Open Ticket button in each support channel. A player picks a ticket type from a menu and adds a title and a description, and a private channel opens for them and the staff. Open and closed tickets have separate categories, and there is a limit on how many a player can have open at once.",
          "Inside the channel, the bot posts the ticket's details with Claim, Close and Delete buttons for staff. Closed tickets are archived automatically after a set number of days, and the welcome message and channel names can be customised.",
          "The Discord views on this page are recreated from the bot's own messages, with sample data.",
        ],
        media: [
          {
            src: "/images/work/lumora/discord-open-ticket.jpg",
            alt: "A player opening a ticket in Discord: the ticket type picked from a menu, then a title and description",
          },
          {
            src: "/images/work/lumora/discord-ticket-channel.jpg",
            alt: "A private ticket channel with the ticket's details, the staff buttons and a reply sent from the dashboard",
          },
        ],
      },
      {
        heading: "The queue",
        lede: "Every ticket from every server, in one list, each with an owner.",
        body: [
          "Staff sign in with Discord and see every ticket from every server, filtered by server, status, type or staff member, or found by search. They can claim, reassign, change priority, close, reopen or delete a ticket, and export its chat. Players sign in the same way to follow their own tickets or open new ones from the web.",
          "Each server has its own bot token, encrypted at rest, plus its own staff role and categories, and ticket IDs carry a server code such as LUM-0009. Sets run several ticket panels in one server, such as General Support and Reports & Moderation, each with its own ticket types, department, SLA target, language and features. The SLA shows on every ticket.",
          "The dashboard screenshots on this page use sample data.",
        ],
      },
      {
        heading: "One conversation",
        lede: "Players write in Discord, staff reply from the web, and it stays one thread.",
        body: [
          "Player messages from Discord appear in the dashboard, and staff replies from the dashboard post back into the Discord channel, each tagged DISCORD or WEBAPP. Updates arrive live, and ticket actions send webhook notifications.",
          "Summarize with AI writes a two-to-three-sentence summary of any ticket and saves it with the ticket.",
        ],
        media: [
          {
            src: "/images/work/lumora/conversation.jpg",
            alt: "A ticket where the player writes in Discord and staff reply from the web, with an AI summary alongside",
          },
        ],
      },
      {
        heading: "The numbers",
        lede: "The numbers the team never had, on the first screen staff see.",
        body: [
          "The overview shows open, resolved, average response and total tickets, each with a week-on-week trend, beside a year of ticket activity and breakdowns by priority and type. Analytics go further: tickets over time, response-time trends, staff performance, ticket types and player satisfaction, since players rate each ticket once it closes. Everything exports as CSV or JSON.",
        ],
        media: [
          {
            src: "/images/work/lumora/cover.jpg",
            alt: "The overview, with ticket counts, a year of ticket activity and a priority breakdown",
          },
        ],
      },
      {
        heading: "The assistant",
        lede: "Ask the queue a question, and get a straight answer.",
        body: [
          "The staff assistant answers questions about the queue and the analytics. Its model, API key and prompt are set from Staff Tools, alongside staff permissions, personal and team notes, and server management.",
        ],
        media: [
          {
            src: "/images/work/lumora/ai-assistant.jpg",
            alt: "The staff AI assistant answering questions about the queue and player feedback",
          },
        ],
      },
      {
        heading: "On the phone",
        lede: "English or Japanese, light or dark, desk or phone.",
        body: [
          "The whole dashboard works in English and Japanese, in light and dark mode, with a sidebar that collapses out of the way. It works on a phone too, so the queue goes wherever the moderators do.",
        ],
        media: [
          {
            src: "/images/work/lumora/mobile-overview-conversation.jpg",
            alt: "The overview and a ticket conversation on a phone",
          },
          {
            src: "/images/work/lumora/mobile-analytics-assistant.jpg",
            alt: "Analytics in dark mode and the AI assistant on a phone",
          },
        ],
      },
      {
        heading: "Under the hood",
        lede: "Fourteen weeks, 98 commits and about 60 documented endpoints.",
        body: [
          "It runs on Node.js and Express with discord.js, MongoDB and Socket.IO, draws its charts with ApexCharts, calls the OpenAI API, and is hosted on Railway. About 60 API endpoints are documented with Swagger.",
          "The build took 14 weeks, from the first commit on 24 June 2025 to the last release on 1 October 2025, across 98 commits and 22 pull requests.",
        ],
      },
      {
        // [dummy] every result in this section is invented
        heading: "The result",
        lede: "Faster answers, and one place to find them.",
        body: ["Moderators now work from one dashboard instead of five channels and their DMs."],
        bullets: [
          "Average first response down from about a day to under three hours",
          "94% of tickets closed within their set's SLA target",
          "Closed tickets rated 4.6 out of 5 by players on average",
        ],
      },
    ],
    stats: [
      { value: "< 3h", label: "average first response, down from about a day" }, // [dummy]
      { value: "4.6/5", label: "average player rating on closed tickets" }, // [dummy]
      { value: "2", label: "languages, English and Japanese" },
      { value: "14", label: "weeks from first commit to final release" },
    ],
    // [dummy] invented quote from an invented person
    testimonial: {
      text: "Support used to live in forty different DMs. Now every ticket has an owner, players get answered where they already are, and I can see the whole queue at a glance.",
      name: "Aiko Tanaka",
      role: "Head of Community, Lumora Games",
    },
  },
  {
    /* SAMPLE: invented client, numbers and quote, with mocked-up
       artwork. Replace with a real project or delete before the site
       goes live. */
    slug: "kestrel-accountancy",
    client: "Kestrel Accountancy",
    title: "Year-end paperwork that chases itself",
    summary:
      "An accountancy practice that spent a day a week chasing clients for documents now onboards clients and collects their paperwork automatically, with AI reading and filing every upload.",
    sector: "Accountancy & professional services",
    location: "York, UK",
    services: ["Workflow automation", "AI integration", "Client portal"],
    year: "2026",
    cover: {
      src: "/images/work/kestrel-accountancy/cover.jpg",
      alt: "The year-end board, with each client's document checklist, what is still needed and the next step",
    },
    sections: [
      {
        heading: "Overview",
        lede: "Six people, 238 tax returns, and a January that started in October.",
        body: [
          "Kestrel is a six-person accountancy practice in York. Most of its clients are sole traders and landlords who need a self-assessment return every year, and every return starts with the same paperwork: bank statements, P60s, rental statements and receipts.",
          "Collecting that paperwork was the slowest part of the job, and almost all of it was done by hand. The practice asked us to automate the chasing without making it feel automated to clients.",
        ],
        bullets: [
          "A new-client flow from enquiry form to signed engagement letter",
          "A document checklist for every client, built from their type of return",
          "Reminders by email and text that name only what is missing",
          "A private upload page for each client",
          "AI that reads, names and files every upload",
          "A year-end board and a Monday digest for the partners",
        ],
      },
      {
        heading: "The challenge",
        lede: "A day a week on the phone, asking for the same five documents.",
        body: [
          "Onboarding a new client took fourteen manual steps across four tools: a web form, the practice software, a shared drive and a spreadsheet. It often took a fortnight.",
          "Documents arrived by email, WhatsApp and post, with names like scan0042.pdf, so someone had to open every one to work out what it was and whose it was. Chasing lived in a spreadsheet and in people's heads, and between October and January it cost the team about a day every week.",
        ],
      },
      {
        heading: "Onboarding on rails",
        lede: "One form starts everything. A person steps in once, to approve.",
        body: [
          "A new client fills in a single form. The flow creates them in the practice software, sends the engagement letter for e-signature, runs the ID and anti-money-laundering check, makes their folder and builds their document checklist. A partner approves in one click, and the client gets a welcome message and their upload link, usually the same day.",
          "If the ID check needs a second look, the flow asks the client again and tells the partner, instead of stalling quietly.",
        ],
        media: [
          {
            src: "/images/work/kestrel-accountancy/onboarding-flow.jpg",
            alt: "The new-client onboarding flow, beside a run that went from form to welcome in just over three hours",
          },
        ],
      },
      {
        heading: "The chase",
        lede: "Polite, persistent, and quiet the moment the file arrives.",
        body: [
          "Each client gets a private page listing exactly what the practice still needs, where they can upload a file or take a photo. Reminders follow a schedule the practice set: an email after a week, a text after two, and a place on the team's call list after three.",
          "Every reminder names only what is still missing, and it stops as soon as the file arrives.",
        ],
        media: [
          {
            src: "/images/work/kestrel-accountancy/mobile-reminder-upload.jpg",
            alt: "A text reminder naming two missing documents, and the client's upload page on a phone",
            aspect: "4 / 3",
          },
        ],
      },
      {
        heading: "Sorted on arrival",
        lede: "AI reads every upload, and asks a person when it isn't sure.",
        body: [
          "Every file a client sends is read by AI, which works out what it is, renames it to the practice's convention, files it in the right folder and ticks it off the checklist.",
          "When it is less than sure, or something doesn't match what the practice already knows, such as a property address, the file waits in a review queue with the reason spelled out. Nothing is filed on a guess.",
        ],
        media: [
          {
            src: "/images/work/kestrel-accountancy/document-inbox.jpg",
            alt: "The document inbox, with a mortgage statement held for review because its address doesn't match the one on file",
          },
        ],
      },
      {
        heading: "The board",
        lede: "Every client, every document, on one screen.",
        body: [
          "The team works from a year-end board that shows each client's checklist, what is still needed, the last contact and the next step. Anything that needs a person, whether a document to check or a call to make, rises to the top.",
          "On Monday mornings the partners get a digest: returns ready to start, clients who have gone quiet and the week's deadlines.",
        ],
      },
      {
        heading: "The result",
        lede: "The chasing still happens. The team just doesn't do it.",
        body: [
          "In the first filing season on the new system, most clients sent everything before a second reminder, and the team spent its January on returns instead of the phone.",
        ],
        bullets: [
          "Chasing down from about a day a week to around an hour",
          "71% of documents in before a second reminder",
          "New clients onboarded the same day instead of in a fortnight",
        ],
      },
    ],
    stats: [
      { value: "7 hrs", label: "a week back in filing season" },
      { value: "71%", label: "of documents in before a second reminder" },
      { value: "1", label: "manual step to onboard a client, down from 14" },
      { value: "5 wks", label: "from kick-off to the first reminders going out" },
    ],
    testimonial: {
      text: "January used to mean a spreadsheet of who owed us what and an afternoon on the phone. Now the system does the asking, and we get on with the accounts.",
      name: "Rachel Moss",
      role: "Practice Manager, Kestrel Accountancy",
    },
  },
  {
    /* SAMPLE: invented client, numbers and quote, with mocked-up
       artwork. Replace with a real project or delete before the site
       goes live. */
    slug: "linden-dental-studio",
    client: "Linden Dental Studio",
    title: "A front desk that never closes",
    summary:
      "An AI assistant for a private dental practice that answers questions about treatments and prices, books consultations and hands anything clinical to the team, on the website and WhatsApp, at any hour.",
    sector: "Dental & healthcare",
    location: "Bristol, UK",
    services: ["AI chatbot", "WhatsApp", "Booking integration"],
    year: "2026",
    cover: {
      src: "/images/work/linden-dental-studio/cover.jpg",
      alt: "The practice website with the assistant open, answering a question about Invisalign prices and offering consultation slots",
    },
    sections: [
      {
        heading: "Overview",
        lede: "A busy practice whose enquiries arrived when nobody was there to answer them.",
        body: [
          "Linden is a private dental practice in Clifton, Bristol, offering general dentistry, hygiene, Invisalign, whitening and implants. Reception is open from eight till six, but nearly half the practice's enquiries came in after it closed.",
          "The practice wanted those people answered and booked straight away, without an assistant ever giving clinical advice.",
        ],
        bullets: [
          "An AI assistant on the website and WhatsApp",
          "Answers drawn only from the practice's own prices, FAQs and policies",
          "Consultations booked straight into the diary",
          "Anything clinical or urgent handed to reception, with the chat attached",
          "A dashboard of conversations, bookings and unanswered questions",
        ],
      },
      {
        heading: "The challenge",
        lede: "Evening questions became morning voicemails.",
        body: [
          "Most enquiries were the same dozen questions: how much is Invisalign, are you taking new patients, is there parking, can I spread the cost. Asked after six, they turned into voicemails and contact-form emails that reception worked through the next morning, by which time many people had booked elsewhere.",
          "Whatever the assistant said had to be right and safe: no diagnoses, no guessed prices, and a quick route to a person for anything urgent.",
        ],
      },
      {
        heading: "On the website",
        lede: "Ask a question, get a straight answer, book in the same window.",
        body: [
          "The assistant sits in the corner of every page in the practice's colours. It answers from a knowledge base the practice controls, quotes prices only from the published price list, and shows where each answer came from.",
          "When someone is ready, it offers real consultation slots from the diary and books one without the visitor leaving the chat.",
        ],
      },
      {
        heading: "Knowing its limits",
        lede: "It knows what it shouldn't answer, and who should.",
        body: [
          "The assistant never gives clinical advice. Mention pain, swelling or an injury and it points to the right urgent help, then passes the conversation to reception with a note of what was promised, such as a call at eight the next morning.",
          "Questions it can't answer from the knowledge base go to reception too, and are logged so the practice can add the answer once.",
        ],
        media: [
          {
            src: "/images/work/linden-dental-studio/handoff.jpg",
            alt: "A late-night emergency handed to reception, with the reason for the hand-off and the promised call-back",
          },
        ],
      },
      {
        heading: "The numbers",
        lede: "What patients ask, and when they ask it.",
        body: [
          "Reception sees every conversation, every booking the assistant made and every hand-off waiting for them. A monthly view shows when people get in touch, what they ask most and which questions still need an answer.",
        ],
        media: [
          {
            src: "/images/work/linden-dental-studio/insights.jpg",
            alt: "The insights page: conversations by hour of day, the most asked questions and the ones the assistant couldn't answer",
          },
        ],
      },
      {
        heading: "On WhatsApp",
        lede: "The same assistant, in the app patients already use.",
        body: [
          "Patients can message the practice on WhatsApp and get the same answers, the same slots and the same hand-off to reception. Appointment reminders go out there too, and a reply confirms or rearranges.",
        ],
        media: [
          {
            src: "/images/work/linden-dental-studio/mobile-chat-whatsapp.jpg",
            alt: "A consultation booked in the chat on a phone, and a reminder and a parking question answered on WhatsApp",
            aspect: "4 / 3",
          },
        ],
      },
      {
        heading: "The result",
        lede: "Mornings start with bookings instead of voicemails.",
        body: [
          "Almost half of all conversations now happen after reception has gone home, and they get an answer straight away instead of the next morning.",
        ],
        bullets: [
          "112 consultations booked through chat in the first three months",
          "83% of questions answered without reception",
          "Every hand-off arrives with the whole conversation attached",
        ],
      },
    ],
    stats: [
      { value: "46%", label: "of conversations happen outside opening hours" },
      { value: "112", label: "consultations booked in chat in the first three months" },
      { value: "83%", label: "of questions answered without reception" },
      { value: "4 wks", label: "from kick-off to live on the website and WhatsApp" },
    ],
    testimonial: {
      text: "It answers the Invisalign question forty times a week so we don't have to, and it hands over the moment anything sounds clinical. We start the day with bookings instead of voicemails.",
      name: "Dr Priya Nair",
      role: "Principal Dentist, Linden Dental Studio",
    },
  },
  {
    /* SAMPLE: invented client, numbers and quote, with mocked-up
       artwork. Replace with a real project or delete before the site
       goes live. */
    slug: "brighton-plumbing-co",
    client: "Brighton Plumbing Co.",
    title: "Turning emergency searches into booked jobs",
    summary:
      "A mobile-first website with click-to-call, a sixty-second quote form and local SEO for a two-van plumbing firm on the Sussex coast.",
    sector: "Trades & home services",
    location: "Brighton, UK",
    services: ["Web design", "Web development", "Local SEO"],
    year: "2025",
    cover: {
      src: "/images/work/brighton-plumbing-co/cover.jpg",
      alt: "Brighton Plumbing Co. home page on desktop, with the call button, live status and quote form above the fold",
    },
    sections: [
      {
        heading: "Overview",
        lede: "A plumbing firm with great reviews and a website nobody could find.",
        body: [
          "Brighton Plumbing Co. is a family business with two vans, a 4.9-star Google rating and a website built in 2016 that did not work on a phone. Most of their work came from word of mouth, and the site was quietly turning away the people who found them online.",
          "They asked for something simple: a site that loads instantly on mobile, makes it obvious how to call, and shows up when someone in Brighton searches for a plumber at eleven at night.",
        ],
        bullets: [
          "Mobile-first website, eight pages",
          "Click-to-call and WhatsApp on every screen",
          "Instant quote form with photo upload",
          "Google Business Profile and local SEO setup",
          "Monthly care plan",
        ],
      },
      {
        heading: "The challenge",
        lede: "Emergency customers decide in seconds. The old site took nine of them to load.",
        body: [
          "Someone with water coming through the ceiling does not browse. They tap the first number that looks trustworthy. The old site buried the phone number in a footer, had no reviews on it, and scored 31 out of 100 on mobile performance.",
          "The second problem was visibility. The business ranked for its own name and nothing else, so every 'emergency plumber Brighton' search went to national lead-generation directories that resell the job.",
        ],
      },
      {
        heading: "What we did",
        lede: "One clear job per page, and a phone number that is never more than a thumb away.",
        body: [
          "We designed the site around the emergency call first: a sticky call button, live opening status, and reviews pulled from Google above the fold. Planned work gets its own path with a quote form that takes under a minute and lets people attach a photo of the problem.",
        ],
        media: [
          {
            src: "/images/work/brighton-plumbing-co/mobile-home-emergency.jpg",
            alt: "The home page and emergency page on a phone, with the call bar pinned to the bottom",
          },
          {
            src: "/images/work/brighton-plumbing-co/quote.jpg",
            alt: "The quote form, with a photo of the problem attached",
          },
        ],
      },
      {
        heading: "Found locally",
        lede: "A page for every job people search for.",
        body: [
          "Every service got its own page written for the search people actually type, backed by a tidied Google Business Profile, consistent citations and a review request that goes out after each job. Each page leads with the phone number, what the job costs and the areas covered.",
        ],
        media: [
          {
            src: "/images/work/brighton-plumbing-co/emergency.jpg",
            alt: "The emergency plumber page, with prices, areas covered and a live availability panel",
          },
        ],
      },
      {
        heading: "The result",
        lede: "Three times the enquiries in the first quarter, without spending a penny on ads.",
        body: [
          "Within ninety days the site was in the top three of the Google Maps pack for its main emergency search, and the quote form went from four enquiries a month to nineteen. The team can now see where every job came from.",
        ],
        bullets: [
          "Top three on Google Maps for 'emergency plumber Brighton'",
          "Quote form enquiries up from 4 to 19 a month",
          "Mobile load time down from 9.1s to 1.2s on 4G",
        ],
      },
    ],
    stats: [
      { value: "3×", label: "more enquiries in the first 90 days" },
      { value: "1.2s", label: "mobile load time, down from 9.1s" },
      { value: "Top 3", label: "on Google Maps for the main emergency search" },
      { value: "6 wks", label: "from brief to launch" },
    ],
    testimonial: {
      text: "The phone rings from the website now, which it never did before. We can see exactly where every job came from.",
      name: "Dave Morris",
      role: "Owner, Brighton Plumbing Co.",
    },
  },
];
