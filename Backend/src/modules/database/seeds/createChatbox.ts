import { PrismaService } from "../prisma.service"

const prismaService = new PrismaService();

export const createSystemChatBoxSpoke = async () => {
    const prismaService = new PrismaService();
    console.log("Create System Chat Box Spoke");
    const spokeData = await prismaService.user.findFirst({
        where: {
            username: "systemSpokeAI"
        }
    })
    if (!!(spokeData)) {

        return;

    }
    const systemChatBox = await prismaService.user.create({
        data: {
            username: "systemSpokeAI",
            name: "System Spoke AI",
            email: "systemSpokeAI@gamil.com",
            phoneNumber: "00000000",
            dataOfBirth: new Date(),
            address: "Server DaNang",
            salt: "123456",
            password: "123456",
            
        }
    })
    console.log(`🚀 ~ file: createChatbox.ts:33 ~ createSystemChatBoxSpoke ~ systemChatBox:`, systemChatBox)

    return;
}