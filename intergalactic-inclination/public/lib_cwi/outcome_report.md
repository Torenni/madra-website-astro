---
title: "**Evaluating Post-War Development Outcomes in Liberia: A County-Level Analysis Using Community Well-Being and Human Development Indexes (2008-2023)**"
author: "Haven Yarl"
date: "2025-11-13"
output: 
  github_document:
    toc: true
    toc_depth: 3
    preserve_yaml: true
  rmdformats::downcute:
    toc_depth: 3
    self_contained: true
    thumbnails: false
    lightbox: true
    gallery: false
    highlight: "tango"
    code_folding: show
always_allow_html: true
knit: (function(inputFile, encoding) {
  rmarkdown::render(inputFile, encoding = encoding,
  output_format = "all") })
---

**Evaluating Post-War Development Outcomes in Liberia: A County-Level
Analysis Using Community Well-Being and Human Development Indexes
(2008-2023)**
================
Haven Yarl
2025-11-13

- [**Background**](#background)
- [**Post-War Development Plans**](#post-war-development-plans)
- [**Liberia Post-War Development
  Challenges**](#liberia-post-war-development-challenges)
- [**Measuring Liberia Development
  Outcomes**](#measuring-liberia-development-outcomes)
- [**Research Design and
  Methodology**](#research-design-and-methodology)
- [**Analysis of Liberia’s Human Development Index
  (2008-2023)**](#analysis-of-liberias-human-development-index-2008-2023)
- [**Analysis of the County-Level Community Wellbeing Index
  (CWI)**](#analysis-of-the-county-level-community-wellbeing-index-cwi)
- [**Analysis of the Regional-Level Community Wellbeing Index
  (CWI)**](#analysis-of-the-regional-level-community-wellbeing-index-cwi)

## **Background**

Liberia’s development trajectory was profoundly shaped by its 14-year
civil conflict (1989–2003), which devastated the nation’s economy,
infrastructure, and human capital. Before the war, Liberia had made
modest progress in sectors such as agriculture, mining, and education;
however, by the end of the conflict, the country’s socioeconomic
foundations had almost entirely collapsed. The long civil conflict
resulted in the deaths of an estimated 150,000 to 250,000 people and
displaced over half of the population, both internally and across
borders [(Center for Justice and
Accountability)](https://cja.org/where-we-work/liberia/). The nation’s
economy experienced a near-total collapse during the civil conflict,
with GDP per capita declining by more than 80 percent between 1980 and
the early 2000s, making Liberia one of the world’s poorest countries
[(World Bank, 2023)](https://data.worldbank.org/country/liberia).

The conflict’s impact on infrastructure and public services was equally
catastrophic. The World Bank reported that Liberia’s national power grid
and water systems were completely destroyed during the war years,
leaving most communities without electricity, clean water, or sanitation
[(World Bank,
2004)](https://documents.worldbank.org/en/publication/documents-reports/documentdetail/765241468010485183/liberias-infrastructure-a-continental-perspective).
Basic social services nearly vanished, and the health system
disintegrated, with hospitals and clinics looted or burned. The
education system suffered similar setbacks: thousands of schools were
destroyed or abandoned, teachers fled the country, and an entire
generation of children lost access to formal education [(United Nations
Development Programme (UNDP),
2006)](https://hdr.undp.org/system/files/documents/liberia2006en.pdf).

Liberia’s labour market was severely weakened during and after the civil
conflict, leaving much of the population dependent on precarious and
low-productivity work. Even prior to the Ebola crisis, formal employment
opportunities were extremely limited, and the overwhelming majority of
workers relied on informal activities marked by low wages, unstable
income, and high vulnerability [(Flomo et al.,
2023)](https://doi.org/10.1002/jid.3736). Moreover, high rates of
illiteracy, poverty, and poor health outcomes severely limiting
citizens’ ability to rebuild their lives. Rebuilding infrastructure,
restoring basic services, and re-establishing social stability became
national imperatives. These conditions underscored the urgency for
post-conflict development interventions. As the UNDP emphasized, the
reconstruction effort required a holistic approach that addressed not
only physical damage but also institutional and governance weaknesses
that had contributed to fragility [(UNDP,
2006)](https://hdr.undp.org/system/files/documents/liberia2006en.pdf).
Furthermore, persistent inequalities between urban and rural counties,
as well as between coastal and hinterland regions, made spatially
targeted development strategies essential.

## **Post-War Development Plans**

In response to these challenges, post-war governments launched a series
of national development plans aimed at rebuilding the economy and
improving the well-being of its people. Each of these plans was
supported by substantial inflows of development assistance from
multilateral and bilateral partners.

The first major national response to this challenge was the Poverty
Reduction Strategy (PRS, 2008-2011), which sought to transition Liberia
from emergency recovery to sustainable development. The PRS articulated
a vision of “rapid, inclusive, and sustainable growth” structured around
four key pillars: peace and security, economic revitalization,
governance and rule of law, and infrastructure and basic services
[(International Monetary Fund (IMF),
2008)](https://www.imf.org/external/pubs/ft/scr/2008/cr08219.pdf). The
plan’s overarching goal was to reduce poverty through the reconstruction
of critical infrastructure, including roads, electricity, and water
systems, while simultaneously restoring health and education services.
The PRS also aimed to re-establish government credibility and strengthen
public financial management after years of institutional breakdown. By
the end of its implementation period, Liberia had recorded modest
economic growth and some improvements in service delivery, although
challenges remained in employment creation and equitable service
distribution [(IMF, 2012)](https://doi.org/10.5089/9781463941055.002).

Building on the progress achieved under the PRS, the government launched
the Agenda for Transformation (AfT, 2012-2017) as the second medium-term
development framework. The AfT represented a deliberate shift from
post-conflict recovery toward structural transformation and inclusive
growth. Anchored in the long-term vision of Liberia Rising 2030, the AfT
emphasized human capital development, private sector expansion, youth
employment, and regional equity [(Republic of Liberia,
2013](https://faolex.fao.org/docs/pdf/lbr169062.pdf); [UNDP,
2013](https://www.undp.org/liberia/publications/liberia-agenda-transformation)).
It focused heavily on infrastructure, particularly roads, energy, and
information and communications technology, as drivers of competitiveness
and decentralization. The plan also prioritized institutional reforms
aimed at strengthening transparency, governance, and the business
environment. Expected outcomes included improved economic
diversification, reduced regional disparities, and stronger human
development indicators. Although implementation of the Agenda for
Transformation (AfT) was disrupted by the 2014–2016 Ebola epidemic, the
plan nonetheless consolidated many of the recovery gains achieved during
the post-conflict period and continued to guide reform efforts in
subsequent years [(World Bank,
2017)](https://documents1.worldbank.org/curated/en/585371528125859387/pdf/Liberia-From-growth-to-development-priorities-for-sustainably-reducing-poverty-and-achieving-middle-income-status-by-2030.pdf).

The Pro-Poor Agenda for Prosperity and Development (PAPD, 2018-2023),
which succeeded the AfT, was designed to address persistent inequality
and to ensure that economic growth translated into improved living
conditions for all Liberians. The PAPD adopted a rights-based,
equity-driven approach with four interlinked pillars: Power to the
People (human development and empowerment), Economy and Jobs (inclusive
economic growth and job creation), Infrastructure and Resilience
(sustainable and climate-resilient infrastructure), and Governance and
Transparency (accountable and inclusive institutions) [(Ministry of
Finance and Development Planning (MFDP),
2018)](https://climate-laws.org/document/pro-poor-agenda-for-prosperity-and-development_85c1).
Its expected outcomes included reducing absolute poverty to below 20
percent, increasing income for at least one million Liberians, expanding
access to education and healthcare, and strengthening decentralization
to ensure that every county benefits from development resources [(MFDP,
2018)](https://climate-laws.org/document/pro-poor-agenda-for-prosperity-and-development_85c1).
Collectively, the PRS, AfT, and PAPD trace Liberia’s gradual evolution
from reconstruction to transformation to inclusion, reflecting an
expanding focus from rebuilding state capacity to empowering citizens
and promoting equitable growth across the nation’s fifteen counties.

## **Liberia Post-War Development Challenges**

Despite successive national development plans and significant inflows of
international assistance, Liberia continues to face deep and persistent
development challenges that raise critical questions about the
effectiveness of its post-war development strategies. Collectively,
these plans have attracted billions of dollars in donor funding and
technical assistance, yet many indicators of community well-being and
human development remain below regional averages [(MFDP,
2018](https://climate-laws.org/document/pro-poor-agenda-for-prosperity-and-development_85c1);
[United Nations Development Programme (UNDP),
2023)](https://hdr.undp.org/data-center/specific-country-data#/countries/LBR).
The persistence of poor living conditions, limited access to quality
services, and high unemployment suggests that development outcomes have
been unevenly distributed across the country’s fifteen counties.

Recent data underscore these disparities. According to the Liberia
Institute of Statistics and Geo-Information Services [(LISGIS,
2023)](https://lisgis.gov.lr/), over half of the population continues to
live below the national poverty line, with substantial geographic
variations between urban and rural areas. Access to electricity remains
below 30 percent nationwide, and only a minority of households have
improved sanitation or potable water sources [(World Bank,
2023)](https://data.worldbank.org/country/liberia). Educational
attainment also lags, with inequality in education rates hovering around
42 percent, and healthcare access remains limited, particularly in rural
counties [(UNDP,
2023)](https://hdr.undp.org/data-center/specific-country-data#/countries/LBR).
Meanwhile, youth unemployment and underemployment remain acute, posing
risks to social stability and economic productivity [(African
Development Bank (AfDB),
2022)](https://www.afdb.org/en/countries/west-africa/liberia). These
conditions reveal an implementation gap between national development
planning and tangible improvements in citizens’ quality of life.

## **Measuring Liberia Development Outcomes**

The primary purpose of this study is to evaluate Liberia’s post-war
development performance by integrating national human development
analysis with a spatially disaggregated assessment of community
well-being. Although Liberia has implemented three national development
plans since 2008, the long-term effects of these plans on the quality of
life of its citizens have not been adequately assessed. Government and
donor reporting often emphasizes program outputs, such as infrastructure
construction or service expansion, but provides limited systematic
evaluations of how these investments translate into actual improvements
in people’s lives, especially at the county and regional levels.

To address this gap, the study employs two complementary frameworks:

**1.** **The Human Development Index (HDI)** captures national-level
progress in education, health, and income.

**2.** **The Community Well-Being Index (CWI)**, developed from
census-based indicators, measures living standards, infrastructure
access, and material well-being across Liberia’s fifteen counties and
four regions.

Using both the HDI and the CWI allows the study to distinguish national
progress from subnational disparities, revealing pockets of persistent
vulnerability that national averages may obscure. The CWI, in
particular, provides a multidimensional view of county-level conditions
by integrating indicators related to housing, health vulnerabilities,
water and sanitation, educational attainment, and geographic
disadvantage. This dual-assessment approach enables a more comprehensive
understanding of Liberia’s development performance, identifying where
gains have been broad-based and where structural inequalities remain
entrenched.

Ultimately, this combined HDI-CWI framework enhances the evidence base
for evaluating the country’s development plans. It reveals not only
whether Liberia has made overall progress but also whether that progress
has been equitable and inclusive across counties and regions. These
findings will help inform the design of Liberia’s next medium-term
development strategy and guide future investments toward areas of
greatest need.

## **Research Design and Methodology**

This research utilized a mixed-method analytical design that combines
both longitudinal and cross-sectional components to assess post-war
development outcomes in Liberia. The first component involved a
longitudinal analysis of the HDI in Liberia from 2008 to 2023, using
annual national estimates published by the UNDP [(UNDP,
2024)](https://hdr.undp.org/data-center/human-development-index#/indicies/HDI).
This approach enabled the examination of long-term trends in human
development across the three national development plan periods.

The second component included a cross-sectional spatial analysis based
on the 2023 National Population and Housing Census. Utilizing this
census data, a CWI was created to measure county-level variations in
material living standards, housing quality, access to services, and
other aspects of community welfare. Since the CWI data were only
available for 2023, this component offers a snapshot of current
conditions rather than a comparison before and after an intervention.
Therefore, this study is best described as a hybrid
longitudinal–cross-sectional design instead of a quasi-experimental
pre-post analysis.

To enhance statistical rigor, Principal Component Analysis (PCA) will be
employed to assign objective, data-driven weights to each variable
within the CWI. PCA reduces redundancy among correlated indicators and
ensures that the final composite score accurately reflects the
underlying variance in the data [(Jolliffe, I. T., & Cadima, J.
2016)](https://doi.org/10.1098/rsta.2015.0202). By relying on an
empirical weighting method rather than subjective judgments, this study
provides a robust and transparent framework for capturing the
multidimensional nature of community well-being. Through this
methodology, the analysis establishes a solid empirical foundation for
evaluating the effectiveness of Liberia’s national development plans in
transforming county-level living conditions between 2008 and 2023.

## **Analysis of Liberia’s Human Development Index (2008-2023)**

First, we examine the country’s overall Human Development Index trend.
Liberia’s HDI has shown a steady upward trend from 2008 to 2023,
reflecting gradual improvements in education, health, and living
standards. The HDI increased from 0.459 in 2008 to 0.510 in 2023,
marking an overall rise of 11 percent, and positioning the country at
177 out of 193 countries and territories. This minimum long-term
improvement aligns with the implementation of the country’s three
post-war national development plans, with each linking to progressively
higher HDI outcomes. A trend graph illustrates this pattern, showing
continuous improvement in most years, despite temporary dips during
major national crises, such as the Ebola outbreak (2013-2014) and the
COVID-19 pandemic (2020). After each crisis, Liberia resumed its upward
trajectory, ultimately achieving its highest HDI score in 2023.

<figure>
<img src="./imgs/hdi_trend.png"
alt="Alt-text: Human Development Trend" />
<figcaption aria-hidden="true">Alt-text: Human Development
Trend</figcaption>
</figure>

When comparing the three plan periods, clear differences in performance
emerge. The PRS years recorded the lowest HDI levels, averaging roughly
0.02 points lower than in the subsequent AfT period. This is consistent
with the PRS’s focus on early post-war stabilization and reconstruction,
a stage where human development gains would naturally be more limited.
The AfT period marked noticeable improvement, with HDI values rising to
an average of around 0.48, reflecting increased investments in
education, health services, and economic infrastructure. The most
significant gains occurred during the PAPD period, where HDI values were
approximately 0.02 points higher than during the AfT years. This
suggests that the efforts of the PAPD era, particularly those centered
on inclusive growth, social protection, and expanding access to
services, were associated with the highest levels of human development
recorded in Liberia over the past fifteen years.

Despite this progress, it is essential to note that Liberia has not yet
achieved a satisfactory or high level of human development. According to
global UNDP classifications, countries with an HDI below 0.55 are
categorized as having low human development. Liberia’s 2023 value of
0.510, while the country’s best performance to date, still places it
firmly within this lowest tier. This underscores the reality that
although Liberia has made measurable improvements, these gains remain
incremental rather than transformative, and significant gaps persist in
education quality, health outcomes, income, and overall human
capability.

Overall, the data reveal a story of gradual recovery and steady, though
modest, advancement across the three development plan periods. Progress
has consistently moved in the right direction, with each successive plan
period accompanied by improved human development outcomes. However, the
magnitude of improvement remains relatively small, indicating that
Liberia will need deeper structural reforms and sustained investment in
human capital to move beyond the low human development category and
achieve more substantial and equitable advancements in the years ahead.

## **Analysis of the County-Level Community Wellbeing Index (CWI)**

The CWI at the county level reveals significant disparities in wellbeing
across Liberia, highlighting pronounced geographical differences in
social and economic conditions. Montserrado County leads the
distribution with a perfect score of 100.00, far surpassing all other
counties. This outstanding performance reflects Montserrado’s unique
advantages, including concentrated economic activity, a higher
population density, improved access to public services, better
infrastructure, and a stronger institutional presence. Following
Montserrado, Maryland (52.62) and Margibi (48.48), Maryland is the next
strongest performer. While their scores are significantly lower than
Montserrado’s, they still indicate comparatively favorable living
standards, moderate access to services, and a more stable social
environment than many other counties.

![](imgs/cwi_table_2.png)

Mid-range counties such as River Gee (36.29), Grand Gedeh (31.81), Grand
Cape Mount (28.19), and Nimba (27.08) fall within a moderate wellbeing
band. Their scores suggest that while there is notable access to social,
health, and economic opportunities, it remains uneven. These counties
perform adequately to avoid extreme vulnerability but still experience
gaps in service distribution and resource availability. In stark
contrast, the lower half of the CWI distribution reveals several
counties with significantly reduced well-being, which indicates
persistent structural challenges. Counties like Sinoe (26.06), Bomi
(21.87), and Bong (19.53) exhibit weaker performances, marked by limited
access to essential services and decreased economic stability. Poor
health outcomes, weaker governance, and higher dependence on traditional
livelihoods are likely contributing factors to these low scores.

<iframe align="center" width="1000" height="800" src="./imgs/county_cwi.html">

</iframe>

Further down the spectrum, Grand Kru (14.25), Grand Bassa (13.87), and
Lofa (5.48) score extremely low, reflecting substantial developmental
deficiencies. The two counties with the lowest scores, Gbarpolu (5.19)
and Rivercess (0.00), showcase alarming levels of deprivation. Their
scores indicate serious and multidimensional deficits in well-being,
including inadequate access to vital services such as health, education,
transportation, and markets. These findings highlight a stark
urban-rural divide, demonstrating that many rural counties remain
systematically disadvantaged compared to more urbanized or economically
active areas.

When translating these CWI scores into vulnerability categories, the
stratification becomes even clearer. Counties are grouped into four
vulnerability levels: Least Vulnerable, Low Vulnerability, High
Vulnerability, and Most Vulnerable. The Least Vulnerable group includes
Montserrado, Maryland, and Margibi, which benefit from better well-being
conditions relative to the rest of the country. Their stronger social
and economic indicators reveal a degree of resilience.

![](imgs/rank_table_2.png)

The Low Vulnerability group comprises River Gee, Grand Gedeh, Grand Cape
Mount, and Nimba, which perform moderately. They are not severely
deprived, but still confront noticeable challenges in achieving balanced
development. The High Vulnerability group, consisting of Sinoe, Bomi,
Bong, and Grand Kru, exhibits distinct structural barriers to wellbeing,
characterized by weaker infrastructure, limited service availability,
and greater exposure to social and economic shocks.

<iframe align="center" width="110%" height="700px" src="./imgs/county_cat.html">

</iframe>

Finally, the Most Vulnerable counties, including Grand Bassa, Lofa,
Gbarpolu, and Rivercess, represent the areas of greatest concern. Their
extremely low scores indicate widespread and multifaceted deprivation,
making them a top priority for targeted interventions and long-term
investment.

The county rankings further emphasize this pattern of inequality.
Montserrado firmly holds the top position, followed by Maryland and
Margibi, showcasing a concentration of well-being in these select
counties. Mid-ranked counties, such as River Gee (rank 4) and Grand
Gedeh (rank 5), outperform several more populous or historically
significant counties, demonstrating that population size does not always
correlate with well-being outcomes. As the rankings progress downward,
counties such as Sinoe, Bomi, and Bong occupy the middle to lower tiers,
each exhibiting vulnerabilities that affect their overall well-being.

At the bottom of the rankings, Grand Kru (rank 11), Grand Bassa (rank
12), Lofa (rank 13), Gbarpolu (rank 14), and Rivercess (rank 15) exhibit
similar patterns of deprivation, characterized by inadequate social
infrastructure, limited economic opportunities, and weaker institutional
capacity. Their rankings confirm that the country’s lowest levels of
wellbeing are clustered among a group of rural, underserved counties,
underscoring the need for equitable and regionally sensitive
policymaking.

## **Analysis of the Regional-Level Community Wellbeing Index (CWI)**

The regional-level CWI analysis consolidates county-level disparities
into broader spatial patterns. Four regions, South Central,
Southeastern, Northwestern, and North Central, exhibit distinct
well-being profiles that closely align with the characteristics of their
constituent counties.

South Central, which includes Montserrado and its surrounding counties,
emerges as the most advantaged region, boasting an average CWI score of
40.59. This strong performance is primarily driven by Montserrado’s
exceptionally high score, as well as the region’s comparatively better
access to infrastructure, economic activity, government institutions,
and social services.

In contrast, the Southeastern region, with an average score of 32.21,
holds a moderate position. While it does not reach the well-being levels
observed in South Central, it shows better conditions than the more
vulnerable northern regions. The counties in the Southeastern region
present mixed outcomes, with some demonstrating moderate performance
while others face significant structural hardships. Nevertheless, the
region as a whole exhibits relative stability compared to the interior
regions.

The Northwestern region, with an average CWI score of 18.42, exhibits
significant well-being deficits. This region includes counties such as
Bomi and Gbarpolu, which rank among the lowest in the nation. The
overall average for this region reflects a combination of
vulnerabilities, such as limited infrastructure, inadequate service
delivery, and reduced access to economic and social opportunities. Of
particular concern is the Northcentral region, which records the lowest
average score of 17.36, making it the most vulnerable region. This
outcome is driven by the very low performances of counties like Lofa,
Bong, and Grand Bassa, which collectively hinder the region’s well-being
profile. These results indicate that the northern part of Liberia faces
severe and systemic challenges across geographic, economic, and
institutional dimensions.

The regional vulnerability categories align closely with the CWI scores.
South Central is classified as the Least Vulnerable Region, enjoying the
strongest well-being outcomes nationally. The Southeastern region falls
under the Low Vulnerability category, indicating moderate well-being and
partial access to services. On the other hand, the Northwestern region
is categorized as having High Vulnerability, consistent with multiple
counties exhibiting low CWI scores. Finally, North Central, with the
lowest regional average, is designated as the Most Vulnerable Region,
confirming its urgent need for targeted policy interventions, investment
in services, and long-term development support.

This ranking highlights the profound spatial inequalities across
Liberia, demonstrating that well-being is not evenly distributed
throughout the country. Instead, well-being is strongly influenced by
historical patterns of development, infrastructure distribution,
economic concentration, and rural-urban dynamics. Despite their
geographical size and agricultural significance, the northern regions
face complex structural challenges that inhibit improvements in
wellbeing.

<div class="cell">

<style type="text/css">
img {
  border: 50px solid white;
}
</style>

</div>
