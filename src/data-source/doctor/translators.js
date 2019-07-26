export const doctorsTranslator = ({
    uid,
    profile,
    npi
}) => {
    return {
        id: uid,
        key: uid,
        firstName: profile.first_name,
        middleName: profile.middle_name,
        lastName: profile.last_name,
        phoneNumber: npi,
        languages:profile.languages[0].name,
        bio: profile.bio
    }
}