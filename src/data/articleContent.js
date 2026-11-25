
import {
  PiChartLineLight,
  PiUsersLight,
  PiCpuLight,
  PiUserFocusLight,
  PiScalesLight,
  PiLeafLight,
  PiTargetLight,
  PiHandshakeLight,
  PiGearLight,
  PiGlobeLight,
  PiLightbulbLight,
} from 'react-icons/pi';

const growthChallenges = [
  { icon: PiChartLineLight, text: 'Changing market conditions and economic uncertainty' },
  { icon: PiUsersLight, text: 'Evolving customer needs and expectations' },
  { icon: PiCpuLight, text: 'Technology adoption and digital transformation' },
  { icon: PiUserFocusLight, text: 'Access to skills and experienced talent' },
  { icon: PiScalesLight, text: 'Financial discipline and resource allocation' },
  { icon: PiLeafLight, text: 'Long-term sustainability and resilience' },
];

const leadershipChallenges = [
  { icon: PiUsersLight, text: 'Maintaining engagement across diverse teams' },
  { icon: PiUserFocusLight, text: 'Developing and retaining skilled people' },
  { icon: PiCpuLight, text: 'Leading teams through technological change' },
  { icon: PiHandshakeLight, text: 'Building trust and effective communication' },
  { icon: PiTargetLight, text: 'Aligning individual and business objectives' },
  { icon: PiChartLineLight, text: 'Managing performance through uncertainty' },
];

const operationsChallenges = [
  { icon: PiGearLight, text: 'Inefficient processes and duplicated activities' },
  { icon: PiChartLineLight, text: 'Limited visibility over operational performance' },
  { icon: PiUsersLight, text: 'Unclear ownership and accountability' },
  { icon: PiCpuLight, text: 'Disconnected systems and manual workflows' },
  { icon: PiScalesLight, text: 'Inconsistent standards and controls' },
  { icon: PiTargetLight, text: 'Difficulty measuring improvement outcomes' },
];

const marketChallenges = [
  { icon: PiGlobeLight, text: 'Changing regional and global economic conditions' },
  { icon: PiCpuLight, text: 'Rapid digital adoption and innovation' },
  { icon: PiUsersLight, text: 'Shifting consumer behaviour and demand' },
  { icon: PiScalesLight, text: 'Regulatory and policy developments' },
  { icon: PiChartLineLight, text: 'Currency, financing and market volatility' },
  { icon: PiTargetLight, text: 'Identifying viable opportunities for expansion' },
];

const sustainabilityChallenges = [
  { icon: PiLeafLight, text: 'Integrating sustainability into business strategy' },
  { icon: PiScalesLight, text: 'Meeting evolving regulatory expectations' },
  { icon: PiChartLineLight, text: 'Balancing investment with financial returns' },
  { icon: PiUsersLight, text: 'Responding to stakeholder expectations' },
  { icon: PiGearLight, text: 'Improving resource and energy efficiency' },
  { icon: PiTargetLight, text: 'Measuring and reporting meaningful progress' },
];

export const ARTICLE_CONTENT = {
  'sustainable-business-growth-strategies': {
    dek: 'Discover how businesses can scale with purpose, strengthen their foundations and create lasting value in an increasingly competitive environment.',
    author: { name: 'Tolu Adebayo', role: 'Senior Strategy Consultant' },
    date: 'Oct 12, 2024',
    readTime: '10 min read',
    toc: [
      { id: 'landscape', label: 'Rethinking business growth' },
      { id: 'challenges', label: 'Barriers to sustainable growth' },
      { id: 'opportunities', label: 'Where growth opportunities exist' },
      { id: 'strategies', label: 'Five strategies for growth' },
      { id: 'ahead', label: 'Building for the long term' },
    ],
    sections: [
      {
        id: 'landscape',
        eyebrow: 'Rethinking business growth',
        title: ['Growth That Goes', 'Beyond the Numbers.'],
        paragraphs: [
          'Growth is often measured through revenue, market share and expansion. While these indicators matter, they do not always reveal whether a business is becoming stronger. An organisation can increase its turnover while its operating costs, financial exposure and internal complexity grow at an unsustainable rate.',
          'Sustainable growth takes a broader view. It considers the quality of revenue, the strength of the operating model, the organisation’s ability to serve customers consistently and its capacity to adapt as conditions change.',
        ],
        image: true,
      },
      {
        id: 'challenges',
        eyebrow: 'Barriers to sustainable growth',
        title: ['Understanding What', 'Can Hold a Business Back.'],
        paragraphs: [
          'Businesses pursuing expansion often encounter challenges that are not immediately visible in their financial results. Weak processes, limited access to talent, inconsistent customer experiences and unclear strategic priorities can gradually undermine progress.',
          'Recognising these pressures early allows leadership teams to address structural weaknesses before they become obstacles to performance.',
        ],
        challenges: growthChallenges,
      },
      {
        id: 'opportunities',
        eyebrow: 'Where growth opportunities exist',
        title: ['Finding Opportunity', 'in the Right Places.'],
        paragraphs: [
          'Meaningful growth begins with a clear understanding of where the business can create value. This may involve deepening relationships with existing customers, entering carefully selected markets, developing new products or improving the way services are delivered.',
          'The strongest opportunities are usually those that build on capabilities the organisation already possesses while addressing a clearly established customer need.',
        ],
      },
      {
        id: 'strategies',
        eyebrow: 'Five strategies for growth',
        title: ['Turning Ambition', 'into Practical Action.'],
        paragraphs: [
          'First, establish a clear strategic direction. Growth initiatives should be connected to measurable business priorities rather than pursued simply because an opportunity appears attractive.',
          'Second, strengthen the customer proposition. Understand what customers value, where their needs are changing and how the organisation can deliver a more consistent experience.',
          'Third, invest in operational capability. Scalable processes, reliable systems and clear accountability help organisations manage increased demand without compromising quality.',
          'Fourth, develop people and leadership. Sustainable expansion depends on the skills, judgement and commitment of the people responsible for delivering it.',
          'Finally, maintain financial discipline. Monitor cash flow, investment requirements and exposure so that growth strengthens the organisation rather than placing unnecessary pressure on it.',
        ],
        image: true,
      },
      {
        id: 'ahead',
        eyebrow: 'Building for the long term',
        title: ['A Stronger Foundation', 'for What Comes Next.'],
        paragraphs: [
          'Sustainable growth is not a single initiative or a short-term target. It is the result of consistent decisions that strengthen an organisation over time.',
          'Businesses that combine clear strategy, customer understanding, operational discipline and investment in people are better positioned to respond to change and create enduring value.',
        ],
      },
    ],
    quote: ['Growth is meaningful', 'when the business becomes', 'stronger as it becomes larger.'],
    challenges: growthChallenges,
  },

  'high-performing-teams-uncertain-times': {
    dek: 'How organisations can build resilient teams, develop effective leaders and maintain performance when the business environment is constantly changing.',
    author: { name: 'Tolu Adebayo', role: 'Senior Strategy Consultant' },
    date: 'Sep 28, 2024',
    readTime: '9 min read',
    toc: [
      { id: 'landscape', label: 'The changing nature of work' },
      { id: 'challenges', label: 'Challenges facing teams' },
      { id: 'opportunities', label: 'The value of strong leadership' },
      { id: 'strategies', label: 'Building high-performing teams' },
      { id: 'ahead', label: 'Creating lasting team performance' },
    ],
    sections: [
      {
        id: 'landscape',
        eyebrow: 'The changing nature of work',
        title: ['Performance in', 'a Changing Workplace.'],
        paragraphs: [
          'The ability to attract and retain capable people remains a significant source of competitive advantage. Yet the expectations placed on employees and leaders continue to evolve. Organisations must respond to new technologies, changing working arrangements, shifting customer demands and increased pressure to deliver results.',
          'In this environment, high-performing teams are not simply groups of talented individuals. They are people with a shared understanding of the organisation’s priorities, the confidence to collaborate and the support required to perform consistently.',
        ],
        image: true,
      },
      {
        id: 'challenges',
        eyebrow: 'Challenges facing teams',
        title: ['Why Good Teams', 'Can Still Underperform.'],
        paragraphs: [
          'Even capable teams can struggle when responsibilities are unclear, communication is inconsistent or priorities frequently change. Uncertainty can also affect morale, particularly when employees do not understand how decisions are being made or how their work contributes to wider business objectives.',
          'Leaders need to identify these underlying issues instead of treating every performance problem as an individual capability issue.',
        ],
        challenges: leadershipChallenges,
      },
      {
        id: 'opportunities',
        eyebrow: 'The value of strong leadership',
        title: ['Leadership That', 'Creates Direction.'],
        paragraphs: [
          'Effective leadership provides stability without discouraging change. Leaders establish direction, communicate expectations and create an environment in which people can raise concerns, contribute ideas and take responsibility.',
          'Trust is particularly important during periods of uncertainty. When people understand the reasons behind decisions and believe that their contributions are valued, they are more likely to remain engaged and work towards shared outcomes.',
        ],
      },
      {
        id: 'strategies',
        eyebrow: 'Building high-performing teams',
        title: ['From Individual Talent', 'to Collective Strength.'],
        paragraphs: [
          'Start by establishing clear objectives. Every team member should understand the outcomes they are responsible for and how those outcomes support the organisation’s wider strategy.',
          'Create consistent communication routines. Regular conversations about priorities, progress and obstacles help teams address problems before they affect delivery.',
          'Invest in capability development. Training, mentoring and opportunities to take on greater responsibility help employees build the confidence and skills needed for changing demands.',
          'Encourage accountability and collaboration. Performance should be supported by clear ownership, constructive feedback and a willingness to solve problems across departmental boundaries.',
          'Finally, recognise contribution. Meaningful recognition reinforces positive behaviours and helps create a culture in which people understand the value of their work.',
        ],
        image: true,
      },
      {
        id: 'ahead',
        eyebrow: 'Creating lasting team performance',
        title: ['People Are the', 'Foundation of Progress.'],
        paragraphs: [
          'High-performing teams are built through deliberate leadership, consistent management practices and a shared commitment to improvement. They require more than occasional team-building activities or short-term performance incentives.',
          'Organisations that invest in people and create the conditions for effective collaboration can build the resilience needed to navigate uncertainty and sustain performance over time.',
        ],
      },
    ],
    quote: ['Strong teams do not', 'eliminate uncertainty.', 'They learn to navigate it together.'],
    challenges: leadershipChallenges,
  },

  'business-process-improvement': {
    dek: 'A practical look at how organisations can improve processes, reduce inefficiencies and create operating models that support consistent performance.',
    author: { name: 'Tolu Adebayo', role: 'Senior Strategy Consultant' },
    date: 'Sep 15, 2024',
    readTime: '9 min read',
    toc: [
      { id: 'landscape', label: 'Why processes matter' },
      { id: 'challenges', label: 'Common operational challenges' },
      { id: 'opportunities', label: 'Identifying improvement opportunities' },
      { id: 'strategies', label: 'A practical improvement approach' },
      { id: 'ahead', label: 'Making improvement continuous' },
    ],
    sections: [
      {
        id: 'landscape',
        eyebrow: 'Why processes matter',
        title: ['The Systems Behind', 'Business Performance.'],
        paragraphs: [
          'Every organisation depends on processes to turn strategy into action. From serving customers and managing suppliers to approving expenditure and reporting performance, the quality of these processes influences how reliably a business operates.',
          'As organisations grow, informal ways of working can become difficult to manage. Activities that once depended on a small team’s knowledge may become inconsistent, slow or difficult to monitor.',
        ],
        image: true,
      },
      {
        id: 'challenges',
        eyebrow: 'Common operational challenges',
        title: ['When Complexity', 'Gets in the Way.'],
        paragraphs: [
          'Operational inefficiency is not always caused by a lack of effort. It often develops through unclear responsibilities, duplicated tasks, disconnected systems and procedures that no longer reflect how the organisation works.',
          'These problems increase costs, delay decisions and make it harder for management to understand where performance is being affected.',
        ],
        challenges: operationsChallenges,
      },
      {
        id: 'opportunities',
        eyebrow: 'Identifying improvement opportunities',
        title: ['Seeing the Process', 'as It Really Works.'],
        paragraphs: [
          'Improvement begins with understanding the current operating environment. Organisations should examine how work moves between teams, where decisions are made, what information is required and where delays or unnecessary activities occur.',
          'Engaging employees who work directly with these processes is essential. Their experience can reveal practical issues that may not be visible in management reports or process documentation.',
        ],
      },
      {
        id: 'strategies',
        eyebrow: 'A practical improvement approach',
        title: ['Simplify, Align', 'and Strengthen Delivery.'],
        paragraphs: [
          'Begin by mapping critical processes from start to finish. Establish where work begins, who is responsible for each stage and what outcomes are expected.',
          'Remove unnecessary complexity. Where activities are duplicated or approvals add little value, redesign the workflow while maintaining appropriate controls.',
          'Clarify ownership. Every important process should have defined responsibilities, decision rights and escalation arrangements.',
          'Use technology purposefully. Automation and connected systems can improve speed and visibility, but only when the underlying process is understood and well designed.',
          'Measure results. Track indicators such as turnaround time, error rates, service quality and operating costs to determine whether changes are delivering the intended improvements.',
        ],
        image: true,
      },
      {
        id: 'ahead',
        eyebrow: 'Making improvement continuous',
        title: ['Better Processes,', 'Stronger Organisations.'],
        paragraphs: [
          'Process improvement should not end when a new workflow is introduced. Organisations need regular reviews to ensure processes remain relevant as customer expectations, technology and business priorities change.',
          'By combining clear accountability, reliable performance information and employee involvement, businesses can build operating models that support sustainable growth and better decision-making.',
        ],
      },
    ],
    quote: ['Operational excellence', 'is not about doing', 'more work. It is about doing it better.'],
    challenges: operationsChallenges,
  },

  'market-trends-shaping-business-africa': {
    dek: 'Understanding the economic, technological and consumer developments influencing business opportunities across African markets.',
    author: { name: 'Tolu Adebayo', role: 'Senior Strategy Consultant' },
    date: 'Aug 30, 2024',
    readTime: '10 min read',
    toc: [
      { id: 'landscape', label: 'A changing African market' },
      { id: 'challenges', label: 'Factors shaping the market' },
      { id: 'opportunities', label: 'Where opportunities are emerging' },
      { id: 'strategies', label: 'Responding to market change' },
      { id: 'ahead', label: 'Preparing for the future' },
    ],
    sections: [
      {
        id: 'landscape',
        eyebrow: 'A changing African market',
        title: ['A Continent of', 'Distinct Opportunities.'],
        paragraphs: [
          'African markets continue to evolve through urbanisation, demographic change, technological adoption and shifts in regional trade. These developments are creating new opportunities for businesses across a wide range of industries.',
          'However, Africa is not a single, uniform market. Consumer behaviour, infrastructure, regulation, access to finance and competitive conditions differ considerably between countries and sectors. Businesses need a grounded understanding of these differences before committing resources to expansion.',
        ],
        image: true,
      },
      {
        id: 'challenges',
        eyebrow: 'Factors shaping the market',
        title: ['Understanding the', 'Forces Behind Change.'],
        paragraphs: [
          'Businesses operating across African markets must account for a combination of local and international influences. Economic conditions, exchange-rate movements, infrastructure availability and policy developments can all affect operating costs and commercial decisions.',
          'Understanding these forces requires continuous market research rather than assumptions based on broad regional trends.',
        ],
        challenges: marketChallenges,
      },
      {
        id: 'opportunities',
        eyebrow: 'Where opportunities are emerging',
        title: ['Finding Growth', 'Across Changing Markets.'],
        paragraphs: [
          'Digital services are changing how businesses reach customers, manage transactions and deliver value. Financial technology, e-commerce and digital business services are examples of areas where changing customer behaviour is creating demand.',
          'Opportunities also exist in sectors connected to essential needs, including agriculture, logistics, healthcare, education, energy and infrastructure. The commercial potential of each opportunity depends on local demand, execution capability and the wider operating environment.',
        ],
      },
      {
        id: 'strategies',
        eyebrow: 'Responding to market change',
        title: ['Strategy Must Begin', 'with Local Understanding.'],
        paragraphs: [
          'Businesses should begin with a clear assessment of the markets they intend to serve. This includes customer research, competitor analysis, regulatory considerations and an understanding of the local value chain.',
          'Build partnerships where local knowledge and established relationships can strengthen market entry. The right partners can help organisations understand distribution networks, customer expectations and operational requirements.',
          'Develop flexible operating models. Businesses should account for differences in infrastructure, payment behaviour, logistics and talent availability rather than assuming that one approach will work everywhere.',
          'Manage exposure carefully. Scenario planning, financial controls and a realistic assessment of commercial risks can help organisations make more informed expansion decisions.',
          'Finally, review market assumptions regularly. Conditions change, and strategies should evolve as new information becomes available.',
        ],
        image: true,
      },
      {
        id: 'ahead',
        eyebrow: 'Preparing for the future',
        title: ['Turning Market Insight', 'into Business Advantage.'],
        paragraphs: [
          'The opportunities emerging across African markets are significant, but success depends on the quality of the decisions businesses make. Expansion requires more than identifying a growing sector; it requires an understanding of customers, institutions, infrastructure and the economics of delivery.',
          'Organisations that combine local insight with disciplined execution can position themselves to participate in changing markets while managing the risks that come with them.',
        ],
      },
    ],
    quote: ['Opportunity becomes', 'competitive advantage', 'when insight is matched with execution.'],
    challenges: marketChallenges,
  },

  'business-case-sustainable-growth': {
    dek: 'Why sustainability is increasingly connected to business resilience, operational efficiency, stakeholder confidence and long-term value creation.',
    author: { name: 'Tolu Adebayo', role: 'Senior Strategy Consultant' },
    date: 'Aug 22, 2024',
    readTime: '9 min read',
    toc: [
      { id: 'landscape', label: 'Sustainability and business' },
      { id: 'challenges', label: 'The implementation challenge' },
      { id: 'opportunities', label: 'The commercial opportunity' },
      { id: 'strategies', label: 'Embedding sustainability' },
      { id: 'ahead', label: 'Creating lasting value' },
    ],
    sections: [
      {
        id: 'landscape',
        eyebrow: 'Sustainability and business',
        title: ['Beyond Responsibility', 'to Business Resilience.'],
        paragraphs: [
          'Sustainability is increasingly influencing how organisations assess risk, allocate capital and plan for the future. Customers, employees, investors and regulators are paying greater attention to how businesses manage their environmental and social impacts.',
          'For organisations, this creates both responsibilities and opportunities. Sustainability can influence operating costs, supply-chain resilience, access to markets and the confidence stakeholders place in a business.',
        ],
        image: true,
      },
      {
        id: 'challenges',
        eyebrow: 'The implementation challenge',
        title: ['Moving Beyond', 'Good Intentions.'],
        paragraphs: [
          'Many organisations recognise the importance of sustainability but struggle to translate broad commitments into practical business decisions. Limited data, competing priorities and uncertainty about where to begin can make implementation difficult.',
          'A credible approach requires clear objectives, realistic investment plans and accountability for measurable outcomes.',
        ],
        challenges: sustainabilityChallenges,
      },
      {
        id: 'opportunities',
        eyebrow: 'The commercial opportunity',
        title: ['Where Sustainability', 'Creates Business Value.'],
        paragraphs: [
          'Improving energy and resource efficiency can reduce operating costs and strengthen resilience against supply disruptions. Better waste management and more efficient production methods can also improve the use of existing assets.',
          'Sustainability can influence customer preference, supplier relationships and access to investment. Organisations that understand these connections can identify opportunities that support both commercial performance and wider stakeholder interests.',
        ],
      },
      {
        id: 'strategies',
        eyebrow: 'Embedding sustainability',
        title: ['Making Sustainability', 'Part of the Strategy.'],
        paragraphs: [
          'Begin by understanding the organisation’s most significant environmental, social and governance considerations. Priorities should reflect the nature of the business, its operating environment and the expectations of relevant stakeholders.',
          'Set measurable objectives. Commitments should be supported by clear indicators, realistic timelines and defined responsibility.',
          'Integrate sustainability into operational decisions. Procurement, energy use, product design, workforce practices and risk management all provide opportunities to improve performance.',
          'Strengthen data and reporting. Reliable information helps management evaluate progress, identify gaps and communicate results responsibly.',
          'Review the commercial case. Assess investment requirements, potential efficiencies, operational risks and long-term benefits before implementing major initiatives.',
        ],
        image: true,
      },
      {
        id: 'ahead',
        eyebrow: 'Creating lasting value',
        title: ['A More Responsible', 'Way to Grow.'],
        paragraphs: [
          'Sustainability is most effective when it is treated as part of how a business is managed rather than as a separate communications exercise. It should inform strategy, investment decisions and the way performance is evaluated.',
          'Organisations that take a practical and measurable approach can strengthen their resilience while creating value for customers, employees, investors and the communities in which they operate.',
        ],
      },
    ],
    quote: ['Long-term business value', 'depends on understanding', 'the impact of today’s decisions.'],
    challenges: sustainabilityChallenges,
  },

  'unlocking-sustainable-growth': {
    dek: 'How forward-thinking businesses can navigate uncertainty, seize new opportunities and build long-term resilience in an evolving global landscape.',
    author: { name: 'Tolu Adebayo', role: 'Senior Strategy Consultant' },
    date: 'Oct 12, 2024',
    readTime: '12 min read',
    toc: [
      { id: 'landscape', label: 'The current landscape' },
      { id: 'challenges', label: 'Key challenges' },
      { id: 'opportunities', label: 'Opportunities for growth' },
      { id: 'strategies', label: 'Practical strategies' },
      { id: 'ahead', label: 'Looking ahead' },
    ],
    sections: [
      {
        id: 'landscape',
        eyebrow: 'The current landscape',
        title: ['A More Complex,', 'More Connected World.'],
        paragraphs: [
          'Businesses today operate in an environment defined by rapid technological change, shifting market dynamics and increasing global interdependence. While these changes create uncertainty, they also open up new opportunities for organisations that are ready to adapt.',
          'From evolving customer expectations to regulatory shifts and geopolitical developments, leaders must take a more deliberate and forward-looking approach to strategy.',
        ],
        image: true,
      },
      {
        id: 'challenges',
        eyebrow: 'Key challenges',
        title: ['Navigating Uncertainty', 'with Confidence.'],
        paragraphs: [
          'Economic volatility, disrupted supply chains and increasing competitive pressure are forcing businesses to rethink traditional growth models. Many organisations are also grappling with the following challenges.',
        ],
        challenges: growthChallenges,
      },
      {
        id: 'opportunities',
        eyebrow: 'Opportunities for growth',
        title: ['Turning Change into', 'Competitive Advantage.'],
        paragraphs: [
          'Periods of disruption often create the conditions for meaningful innovation. Businesses that take a long-term view can identify new markets, strengthen operational resilience and build deeper customer relationships.',
          'The key is to distinguish between opportunities that offer lasting value and those that simply respond to short-term market pressure.',
        ],
      },
      {
        id: 'strategies',
        eyebrow: 'Practical strategies',
        title: ['A Focused Approach', 'to Lasting Impact.'],
        paragraphs: [
          'To navigate complexity, organisations need clear priorities, robust capabilities and the right strategic partners. This includes investing in people, leveraging data and technology, and embedding sustainability into core business decisions.',
          'Leaders should also strengthen financial discipline, review operational risks and ensure that business plans can adapt as market conditions evolve.',
        ],
        image: true,
      },
      {
        id: 'ahead',
        eyebrow: 'Looking ahead',
        title: ['Building a More', 'Resilient Future.'],
        paragraphs: [
          'While uncertainty will remain a constant, businesses that combine strategic thinking with practical execution will be better positioned to respond to change.',
          'The question is not whether change will continue, but how prepared your organisation is to turn it into opportunity.',
        ],
      },
    ],
    quote: ['Uncertainty is not a barrier', 'to growth. It is an invitation', 'to build differently.'],
    challenges: growthChallenges,
  },
};
