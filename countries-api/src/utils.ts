export function parseBooleanQuery(queryValue: string | undefined) {
    if (queryValue == null) {
        return null
    }
    
    const canonicalQueryValue = queryValue?.trim().toLowerCase();
    if (canonicalQueryValue === 'true') {
        return true;
    } else if (canonicalQueryValue === 'false') {
        return false;
    } else {
        throw new Error("'available' must be 'true' or 'false'");
    }
}
