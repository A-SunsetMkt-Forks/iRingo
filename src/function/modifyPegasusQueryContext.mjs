export default function modifyPegasusQueryContext(queryContext, Settings) {
    console.log(`☑️ modify PegasusQueryContext`, "");
    Locale = queryContext.locale;
    [Language, CountryCode] = Locale?.split("_") ?? [];
    console.log(`🚧 Locale: ${Locale}, Language: ${Language}, CountryCode: ${CountryCode}`);
    switch (Settings.CountryCode) {
        case "AUTO":
            Settings.CountryCode = CountryCode;
        //break;
        default:
            if (queryContext?.countryCode) queryContext.countryCode = Settings.CountryCode;
            //if (queryContext?.region) queryContext.region = `${Language}_${Settings.CountryCode}`;
            //if (data?.siriPegasusContext?.conversationContext?.cc) data.siriPegasusContext.conversationContext.cc = Settings.CountryCode;
            break;
    };
    if (queryContext?.skuRegion === "CH") queryContext.skuRegion = "LL";
    delete queryContext?.location;
    console.log(`✅ modify PegasusQueryContext`, "");
    return queryContext;
};