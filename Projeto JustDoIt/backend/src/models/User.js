import mongoose from "mongoose";
import bcrypt from "bcrypt";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Nome é obrigatório"],
      trim: true
    },
    email: {
      type: String,
      required: [true, "E-mail é obrigatório"],
      unique: true,
      lowercase: true,
      trim: true
    },
    password: {
      type: String,
      required: [true, "Senha é obrigatória"],
      minlength: 6,
      select: false 
    },
    avatarUrl: {
      type: String,
      default: null
    },
    provider: {
      type: String,
      enum: ["local", "google"],
      default: "local"
    },
    providerId: {
      type: String,
      default: null
    },
    isEmailVerified: {
      type: Boolean,
      default: false
    }
  },
  { timestamps: true } 
);

// Hash da senha ANTES de salvar no banco
userSchema.pre("save", async function () {
  // só re-hasheia se a senha foi modificada (evita re-hash em updates que não tocam a senha)
  if (!this.isModified("password")) return;

  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

// Método de instância pra comparar senha no login
userSchema.methods.comparePassword = async function (candidatePassword) {
  return bcrypt.compare(candidatePassword, this.password);
};

export default mongoose.model("User", userSchema);