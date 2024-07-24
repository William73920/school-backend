import { PrismaClient } from "@prisma/client";
import { createError } from "../error.js";

const prisma = new PrismaClient();

export const addSchool = async (req, res, next) => {
  try {
    const { name, email, address, state, city, contact } = req.body;

    const image = req.file?.path;

    if (!name || !email || !address || !state || !city || !contact || !image) {
      return next(createError(400, "All fields are required"));
    }

    const school = await prisma.school.create({
      data: {
        name,
        email,
        address,
        image,
        city,
        state,
        contact,
      },
    });
    res.status(200).json({
      success: true,
      message: "School added successfully",
      data: school,
    });
  } catch (error) {
    next(error);
  }
};

export const getSchools = async (req, res, next) => {
  try {
    const schools = await prisma.school.findMany();

    if (!schools.length) {
      return next(createError(404, "No schools created yet"));
    }

    res.status(200).json({
      success: true,
      message: "Schools fetched successfully",
      data: schools,
    });
  } catch (error) {
    next(error);
  }
};

export const getSchoolById = async (req, res, next) => {
  const id = req.params.id;

  try {
    const school = await prisma.school.findUnique({
      where: {
        id: Number(id),
      },
    });

    if (!school) {
      return next(createError(404, "School not found"));
    }

    res.status(200).json({
      success: true,
      message: "School fetched successfully",
      data: school,
    });
  } catch (error) {
    next(error);
  }
};
